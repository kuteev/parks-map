import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export abstract class MapProvider {
    public abstract getProviderName():string;
    public abstract load():Observable<Event|void>;
}