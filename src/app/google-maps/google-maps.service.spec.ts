import { TestBed, async } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';
import { ParkItemContainer } from './park-item-container.model';
import { ParkItem } from '../models/park-item';

declare let google: any;

describe('GoogleMapsService', () => {
    let googleMapsService: GoogleMapsService;
    const mockDocument: any = {};

    beforeEach(() => {
        window['google'] = { maps: {} };
        googleMapsService = new GoogleMapsService(mockDocument);
        googleMapsService['listeners'] = [];

        // stub map object
        googleMapsService['map'] = {
            addListener: (eventName, handler) => {
                googleMapsService['listeners'].push(handler);
            },
            getBounds: () => null,
            getCenter: () => null,
            setCenter: (latLng) => { }
        } as google.maps.Map;

        // stub placesService object
        googleMapsService['placesService'] = {
            textSearch: () => null
        };



    });

    it('should return Google Maps as a provider name', () => {
        const providerName = googleMapsService.getProviderName();
        expect(providerName).toBe('Google Maps');
    });

    it('searchParks should work', () => {
        let result: ParkItem[] = [];
        jasmine.clock().install();

        googleMapsService.searchParks().subscribe((parkItems) => {
            result = parkItems;

        });

        googleMapsService['listeners'][0]([new ParkItem()]);
        jasmine.clock().tick(1000);
        expect(result.length).toBe(2);


    });

    it('should set map item active', () => {

    });
});
