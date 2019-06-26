import { Injectable, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subscriber, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { MapProvider } from '../core/map-provider';
import { ParkItemContainer } from './park-item-container.model';
import { ParkItem } from '../models/park-item';
import LocalConfig from '../../../local.config.json';

const API_URL = 'maps.googleapis.com/maps/api/js';
const API_KEY = LocalConfig.google_maps_api_key;

@Injectable()
export class GoogleMapsService implements MapProvider {
  private loader: Observable<Event|void>;
  private map: google.maps.Map;
  private parkItemContainers: ParkItemContainer[] = [];
  private parkListUpdateSubject: Subject<void> = new Subject<void>();

  constructor(@Inject(DOCUMENT) private document: any) {
    this.loader = this._loader().pipe(shareReplay(1));
  }

  getProviderName() {
    return 'Google Maps';
  }

  initialize(element: ElementRef): Observable<void> {
    return new Observable<void>(subscriber => {
      this.load().subscribe((a) => {
        const mapProp: google.maps.MapOptions = {
            center: new google.maps.LatLng(36.845784, -76.196460),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        };
        this.map = new google.maps.Map(element.nativeElement, mapProp);
        subscriber.next();
        subscriber.complete();
      });
    });
  }

  searchParks(): Observable<ParkItem[]> {
    return new Observable<ParkItem[]>(subscriber => {

      const findParksTask = () => {
        this.findParks().subscribe(findResults => {
          const containers = this.updateParkItemContainers(findResults);
          subscriber.next(this.toParkItems(containers));
       });
      };

      // initial call
      findParksTask();

      // subscribing for map movements
      this.map.addListener('idle', findParksTask);

      // subscribing for park list updates
      this.parkListUpdateSubject.subscribe(() => {
        subscriber.next(this.toParkItems(this.parkItemContainers));
      });
    });
  }

  findParks(): Observable<google.maps.places.PlaceResult[]> {
    return new Observable<google.maps.places.PlaceResult[]>(subscriber => {
      const request = { bounds: this.map.getBounds(), query: '', type: 'park', location: this.map.getCenter() };
      const service = new google.maps.places.PlacesService(this.map);

      const callBack = (results: google.maps.places.PlaceResult[],
                        status: google.maps.places.PlacesServiceStatus,
                        pagination: google.maps.places.PlaceSearchPagination) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
              subscriber.next(results);
              if (pagination.hasNextPage) {
                  pagination.nextPage();
              } else {
                subscriber.complete();
              }
          }
      };
      service.textSearch(request, callBack);
    });
  }

  setActive(parkItem: ParkItem): ParkItem[] {
    const parkItemContainer: ParkItemContainer = this.findInParkItemContainers(parkItem);
    if (parkItemContainer) {
      this.map.setCenter({ lat: parkItemContainer.place.geometry.location.lat(), lng: parkItemContainer.place.geometry.location.lng() });
      this.setMarkerActive(parkItemContainer);
    }
    return this.toParkItems(this.parkItemContainers);
  }

  private load(): Observable<Event|void> {
    return this.loader;
  }

  private setMarkerActive(parkItemContainer: ParkItemContainer): void {
    this.parkItemContainers.forEach(container => {
      if (container.place.place_id === parkItemContainer.place.place_id) {
        container.isActive = true;
        container.marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        container.isActive = false;
        container.marker.setAnimation(null);
      }
    });
  }

  private findInParkItemContainers(parkItem: ParkItem): ParkItemContainer {
    return this.parkItemContainers.filter(parkItemContainer => parkItemContainer.place.place_id === parkItem.id)[0];
  }

  private updateParkItemContainers(placeResults: google.maps.places.PlaceResult[]): ParkItemContainer[] {
    this.addParkResults(placeResults);
    this.filterParkItemContainers();
    return this.parkItemContainers;
  }

  private addParkResults(placeResults: google.maps.places.PlaceResult[]): void {
    placeResults.forEach(placeResult => {
      if (!this.parkItemContainers.some(c => c.place.place_id === placeResult.place_id)) {
        const container: ParkItemContainer = new ParkItemContainer();
        container.isActive = false;

        container.marker = new google.maps.Marker({ map: this.map, position: placeResult.geometry.location });
        container.clickListener = google.maps.event.addListener(container.marker, 'click', () => {
          this.setMarkerActive(container);
          this.parkListUpdateSubject.next();
        });

        container.place = placeResult;
        this.parkItemContainers.push(container);
      }
    });
  }

  private filterParkItemContainers(): void {
    const currentBounds = this.map.getBounds();
    this.parkItemContainers.forEach((container, index) => {
      if (!currentBounds.contains(container.place.geometry.location)) {
        container.marker.setMap(null);
        google.maps.event.removeListener(container.clickListener);
        this.parkItemContainers.splice(index, 1);
      }
    });
  }

  private toParkItems(parkItemContainers: ParkItemContainer[]): ParkItem[] {
    const parkItems: ParkItem[] = [];

    parkItemContainers.forEach(parkItemContainer => {
      const parkItem: ParkItem = new ParkItem();
      parkItem.id = parkItemContainer.place.place_id;
      parkItem.isActive = parkItemContainer.isActive;
      parkItem.name = parkItemContainer.place.name;
      parkItem.address = parkItemContainer.place.formatted_address;
      parkItem.pictureUrl = parkItemContainer.place.icon;
      parkItem.rating = parkItemContainer.place.rating;
      parkItems.push(parkItem);
    });

    return parkItems;
  }

  private _loader(): Observable<Event | void> {
    return new Observable((subscriber: Subscriber<Event>) => {
      const params = `key=${API_KEY}&region=US&libraries=places`;
      const element = Object.assign(this.document.createElement('script'), {
        type: 'text/javascript',
        src: `https://${API_URL}?${params}`,
        onload: (res) => {
          subscriber.next(res);
          subscriber.complete();
        },
        onerror: (err) => {
          subscriber.error(err);
        },
      });
      this.document.body.appendChild(element);
    });
  }
}
