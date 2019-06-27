import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MapProvider } from '../core/map-provider';
import { ViewChild } from '@angular/core';
import { ParkItem } from '../models/park-item';
import { ParkListService } from '../core/park-list.service';

@Component({
    selector: 'map-area',
    templateUrl: './map-area.component.html'
})

export class MapAreaComponent implements AfterViewInit {
    @ViewChild('mapcontainer', { static: true }) private gmapElement: ElementRef;

    constructor(private mapProviderService: MapProvider, private parkListService: ParkListService) { }

    ngAfterViewInit() {
        this.mapProviderService.initialize(this.gmapElement).subscribe(nothing => {
            this.mapProviderService.searchParks().subscribe((parkItems) => {
                this.updateService(parkItems);
            });
        });
    }

    private updateService(parkItems: ParkItem[]): void {
        parkItems.forEach(parkItem => {
            if (!parkItem.onClick) {
                parkItem.onClick = () => {
                    const resultParkItems: ParkItem[] = this.mapProviderService.setActive(parkItem);
                    this.updateService(resultParkItems);
                };
            }
        });

        this.parkListService.next(parkItems);
    }
}
