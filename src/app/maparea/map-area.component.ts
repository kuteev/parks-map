import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MapProvider } from '../interfaces/map-provider';
import { ViewChild } from '@angular/core';
import { ParkItem } from '../models/park-item';
import { ParkMarker } from './park-marker.model';

@Component({
    selector: 'map-area',
    templateUrl: './map-area.component.html',
    styleUrls: ['./map-area.component.css']
})

export class MapAreaComponent implements AfterViewInit {
    @ViewChild('gmap', { static: true }) private gmapElement: ElementRef; // todo: read up
    private map: google.maps.Map;
    private parkMarkers: ParkMarker[] = [];
    private currentBounds: google.maps.LatLngBounds;

    constructor(private mapProviderService: MapProvider) { }

    ngAfterViewInit() {
        // todo: move into a separate class
        this.mapProviderService.load().subscribe((a) => {
            const mapProp: google.maps.MapOptions = {
                center: new google.maps.LatLng(36.845784, -76.196460),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
            this.currentBounds = this.map.getBounds();

            this.findPlaces();

            const reboundEvent = () => {
                console.log(this.map.getBounds());
                this.currentBounds = this.map.getBounds();
                this.findPlaces();
               };

            this.map.addListener('dragend', reboundEvent);
            this.map.addListener('zoom_changed', reboundEvent);
        });
    }

    private findPlaces() {
        const request = { bounds: this.map.getBounds(), query: '', type: 'park', location: this.map.getCenter() };
        const service = new google.maps.places.PlacesService(this.map);

        const callBack = (results: google.maps.places.PlaceResult[],
                          status: google.maps.places.PlacesServiceStatus,
                          pagination: google.maps.places.PlaceSearchPagination) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('Fetched results: ' + results.length);
                this.updateParks(results);
                if (pagination.hasNextPage) {
                    pagination.nextPage();
                }
            }
        };
        service.textSearch(request, callBack);
    }

    private filterParks() {
        // filter out off map parks
        const newSetOfMarkers: ParkMarker[] = [];

        this.parkMarkers.forEach(m => {
            if (!newSetOfMarkers.some(nm => nm.place.place_id === m.place.place_id)
            && (!this.currentBounds || this.currentBounds.contains(m.place.geometry.location))) {
                newSetOfMarkers.push(m);
            } else {
                m.marker.setMap(null);
                google.maps.event.removeListener(m.clickListener);
            }
        });

        this.parkMarkers = newSetOfMarkers;
        this.updateService();
    }

    private updateParks(places: google.maps.places.PlaceResult[]): void {
        this.filterParks();
        this.updateMarkers(places);
        this.updateService();
    }

    private updateService(): void {
        let parkItems: ParkItem[] = [];

        const markers = this.parkMarkers;
        if (markers.length > 0) {
            parkItems = markers.map(p => {
                const lat = p.place.geometry.location.lat();
                const lng = p.place.geometry.location.lng();

                return {
                    name: p.place.name,
                    id: p.place.place_id,
                    isActive: p.isActive,
                    onClick: (parkItem: ParkItem) => {
                        this.map.setCenter({ lat, lng });
                        this.parkMarkers.filter(pm => pm.place.place_id === parkItem.id).forEach(pm => {
                            this.setMarkerActive(pm);
                        });
                        this.updateService();
                    }
                };
            });
        }

        this.mapProviderService.updateParkList(parkItems);
    }

    private setMarkerActive(marker: ParkMarker): void {
        if (!marker.isActive) {
            this.parkMarkers.forEach(m => {
                if (m.place.place_id === marker.place.place_id) {
                    m.isActive = true;
                    m.marker.setAnimation(google.maps.Animation.BOUNCE);
                } else {
                    m.isActive = false;
                    m.marker.setAnimation(null);
                }
            });
        }
    }

    private updateMarkers(places: google.maps.places.PlaceResult[]): void {
        places.forEach(place => {
            if (!this.parkMarkers.some(m => m.place.place_id === place.place_id)) {
                const parkMarker: ParkMarker = new ParkMarker();
                const marker = new google.maps.Marker({ map: this.map, position: place.geometry.location });

                const listener = google.maps.event.addListener(marker, 'click', () => {
                    this.setMarkerActive(parkMarker);
                    this.updateService();
                });

                parkMarker.marker = marker;
                parkMarker.place = place;
                parkMarker.clickListener = listener;
                parkMarker.isActive = false;
                this.parkMarkers.push(parkMarker);
            }
        });
    }
}
