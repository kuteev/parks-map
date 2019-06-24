import { Injectable, Inject, OnInit } from '@angular/core';
import { MapProvider } from '../interfaces/index';
import { Observable, Subscriber, ReplaySubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParkItem } from '../models';
import LocalConfig from '../../../local.config.json';

const API_URL = 'maps.googleapis.com/maps/api/js';
const API_KEY = LocalConfig.google_maps_api_key;

@Injectable()
export class GoogleMapsService implements MapProvider {
  private _load: Observable<Event | void>;

  private parkListReplaySubject: ReplaySubject<ParkItem[]> = new ReplaySubject<ParkItem[]>();

  constructor(@Inject(DOCUMENT) private _document: any, private http: HttpClient) {
    this._load = this._loader().pipe(shareReplay(1));
  }

  getProviderName() {
    return "Google Maps";
  }

  load(): Observable<Event | void> {
    return this._load;
  }

  getParksSubscription(): ReplaySubject<ParkItem[]> {
  //  this.updateSubscribers();
    return this.parkListReplaySubject;
  }

  updateLocation(): void {
//    this.updateSubscribers();
  }

  updateParkList(parks: ParkItem[]): void {
    this.parkListReplaySubject.next(parks);
  }


  private _loader(): Observable<Event | void> {
    return new Observable((subscriber: Subscriber<Event>) => {
      const params = `key=${API_KEY}&region=US&libraries=places`;
      const element = Object.assign(this._document.createElement('script'), {
        type: 'text/javascript',
        src: `https://${API_URL}?${params}`,
        onload: (res) => {
          subscriber.next(res);
          subscriber.complete();
        },
        onerror: (err) => {
          subscriber.error(err);
        },
      });
      this._document.body.appendChild(element);
    });
  }
}