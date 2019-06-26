import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export abstract class MapController {
    public abstract getParksSubscription(): ReplaySubject<ParkItem[]>;
    public abstract updateParkList(parkItems: ParkItem[]): void;
}
