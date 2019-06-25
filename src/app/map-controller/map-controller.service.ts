import { Injectable } from '@angular/core';
import { MapController } from '../core/map-controller';
import { ReplaySubject } from 'rxjs';
import { ParkItem } from '../models/park-item';

@Injectable()
export class MapControllerService implements MapController {
  private parkListReplaySubject: ReplaySubject<ParkItem[]> = new ReplaySubject<ParkItem[]>();

  getParksSubscription(): ReplaySubject<ParkItem[]> {
    return this.parkListReplaySubject;
  }

  updateLocation(): void {
  }

  updateParkList(parks: ParkItem[]): void {
    this.parkListReplaySubject.next(parks);
  }
}