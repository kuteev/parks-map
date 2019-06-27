import { Component, OnInit } from '@angular/core';
import { ParkItem } from '../models/park-item';
import { ParkListService } from '../core/park-list.service';

@Component({
    selector: 'park-list',
    templateUrl: './park-list.component.html',
    styleUrls: ['./park-list.component.css']
})

export class ParkListComponent implements OnInit {
    parkItems: ParkItem[];
    element: HTMLElement;

    constructor(private parkListService: ParkListService) { }

    ngOnInit() {
        this.element = document.getElementById('parkList');
        this.parkListService.subscribe((parks) => {
            this.parkItems = parks;
            this.updateScroll();
        });
    }

    private updateScroll(): void {
        if (this.parkItems.some(park => park.isActive)) {
            const visibleHeight: number = this.element.clientHeight;
            const totalHeight: number = this.element.scrollHeight;
            const difference: number = totalHeight - visibleHeight;

            if (difference > 0 && this.parkItems.length > 0) {
                const activePark: ParkItem = this.parkItems.filter(park => park.isActive)[0];
                const activeParkIndex: number = this.parkItems.indexOf(activePark);
                const requiredScroll: number = (difference / this.parkItems.length) * activeParkIndex;
                this.element.scrollTop = requiredScroll;
            }
        }
    }
}
