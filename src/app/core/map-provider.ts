import { Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export abstract class MapProvider {
    public abstract getProviderName(): string;
    public abstract load(): Observable<Event|void>;
    public abstract initialize(element: ElementRef): Observable<void>;
    public abstract searchParks(): Observable<ParkItem[]>;
    public abstract setActive(parkItem: ParkItem): ParkItem[];
}
