import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export abstract class MapController {
    public abstract getParksSubscription():ReplaySubject<ParkItem[]>;
    public abstract updateLocation():void;
    public abstract updateParkList(parkItems: ParkItem[]):void;
}