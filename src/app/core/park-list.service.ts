import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export class ParkListService extends ReplaySubject<ParkItem[]> {

}
