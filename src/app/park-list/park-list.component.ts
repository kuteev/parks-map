import { Component, OnInit } from '@angular/core';
import { ParkItem } from '../models/park-item';
import { MapController } from '../core/map-controller';

@Component({
    selector: 'park-list',
    templateUrl: './park-list.component.html',
    styleUrls: ['./park-list.component.css']
})

export class ParkListComponent implements OnInit {
    parkItems: ParkItem[];

    constructor(private mapControllerService: MapController) {
    }

    ngOnInit() {
        this.mapControllerService.getParksSubscription().subscribe((parks) => {
            this.parkItems = parks;
        });
    }
}
