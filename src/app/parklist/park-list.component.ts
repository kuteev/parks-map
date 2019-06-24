import { Component, OnInit } from '@angular/core';
import { ParkItem } from '../models/index';
import { MapProvider } from '../interfaces/index';

@Component({
    selector: 'park-list',
    templateUrl: './park-list.component.html',
    styleUrls: ['./park-list.component.css']
})

export class ParkListComponent implements OnInit {
    parkItems: ParkItem[];

    constructor(private mapProviderService: MapProvider) {
    }

    ngOnInit() {
        this.mapProviderService.getParksSubscription().subscribe((parks) => {
            this.parkItems=parks;
        });
    }

    onClick(item: ParkItem) {
        alert(this.mapProviderService.getProviderName()+': '+ item.name);
    }



}