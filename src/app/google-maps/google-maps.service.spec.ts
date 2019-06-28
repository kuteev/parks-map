import { GoogleMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {
    let googleMapsService: GoogleMapsService;
    const mockDocument: any = {};

    beforeEach(() => {
        googleMapsService = new GoogleMapsService(mockDocument);
    });

    it('should return Google Maps as a provider name', () => {
        const providerName = googleMapsService.getProviderName();
        expect(providerName).toBe('Google Maps');
    });
});
