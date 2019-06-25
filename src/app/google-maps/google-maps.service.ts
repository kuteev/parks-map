import { Injectable, Inject, OnInit } from '@angular/core';
import { MapProvider } from '../core/map-provider';
import { Observable, Subscriber, ReplaySubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { ParkItem } from '../models/park-item';
import LocalConfig from '../../../local.config.json';

const API_URL = 'maps.googleapis.com/maps/api/js';
const API_KEY = LocalConfig.google_maps_api_key;

@Injectable()
export class GoogleMapsService implements MapProvider {
  private loader: Observable<Event | void>;
  constructor(@Inject(DOCUMENT) private document: any) {
    this.loader = this._loader().pipe(shareReplay(1));
  }

  getProviderName() {
    return 'Google Maps';
  }

  load(): Observable<Event | void> {
    return this.loader;
  }

  private _loader(): Observable<Event | void> {
    return new Observable((subscriber: Subscriber<Event>) => {
      const params = `key=${API_KEY}&region=US&libraries=places`;
      const element = Object.assign(this.document.createElement('script'), {
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
      this.document.body.appendChild(element);
    });
  }
}
