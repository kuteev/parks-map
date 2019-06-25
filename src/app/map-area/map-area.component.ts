import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MapProvider } from '../core/map-provider';
import { MapController } from '../core/map-controller';
import { ViewChild } from '@angular/core';
import { ParkItem } from '../models/park-item';

@Component({
    selector: 'map-area',
    templateUrl: './map-area.component.html',
    styleUrls: ['./map-area.component.css']
})

export class MapAreaComponent implements AfterViewInit {
    @ViewChild('gmap', { static: true }) private gmapElement: ElementRef; // todo: read up

    constructor(private mapProviderService: MapProvider, private mapControllerService: MapController) { }

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
                parkItem.onClick = (parkItem1: ParkItem) => {
                    const resultParkItems: ParkItem[] = this.mapProviderService.setActive(parkItem1);
                    this.updateService(resultParkItems);
                };
            }
        });

        this.mapControllerService.updateParkList(parkItems);
    }
}
