import { TestBed, async } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';
import { ParkItemContainer } from './park-item-container.model';


describe('GoogleMapsService', () => {
    let googleMapsService: GoogleMapsService;
    const mockDocument: any = {};


    beforeEach(() => {
        googleMapsService = new GoogleMapsService(mockDocument);

        // stub map object
        googleMapsService['map'] = {
            addListener: (eventName, handler) => { },
            getBounds: () => new google.maps.LatLngBounds(),
            getCenter: () => new google.maps.LatLng(100, 100),
            setCenter: (latLng) => {}
         } as google.maps.Map;

        // stub placesService object
        googleMapsService['placesService'] = { } as google.maps.places.PlacesService;

    });

    it('should return Google Maps as a provider name', () => {
        const providerName = googleMapsService.getProviderName();
        expect(providerName).toBe('Google Maps');
    });

    it('searchParks should work', () => {

    });

    it('should set map item active', () => {

    });
});
