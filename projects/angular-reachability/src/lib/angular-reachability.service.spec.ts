import { TestBed } from '@angular/core/testing';
import { AngularReachabilityService } from './angular-reachability.service';
import { firstValueFrom } from 'rxjs';

describe('AngularReachabilityService', () => {
  let service: AngularReachabilityService;
  let mockFetch: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReachabilityService);
    
    // Mock the window.fetch function
    mockFetch = spyOn(window, 'fetch');
  });

  afterEach(() => {
    mockFetch.calls.reset();
  });

  describe('isReachable', () => {
    it('should return true when URL is reachable', async () => {
      mockFetch.and.resolveTo({ ok: true } as Response);
      
      const result = await service.isReachable('https://test.com');
      expect(result).toBeTrue();
      expect(mockFetch).toHaveBeenCalledWith('https://test.com', { cache: 'no-cache' });
    });

    it('should return false when URL returns non-ok status', async () => {
      mockFetch.and.resolveTo({ ok: false } as Response);
      
      const result = await service.isReachable('https://test.com');
      expect(result).toBeFalse();
    });

    it('should return false when fetch throws an error', async () => {
      mockFetch.and.rejectWith(new Error('Network error'));
      
      const result = await service.isReachable('https://test.com');
      expect(result).toBeFalse();
    });
  });

  describe('onConnect', () => {
    it('should emit "you are online" when online event is triggered', async () => {
      const onlinePromise = firstValueFrom(service.onConnect());
      
      // Simulate online event
      window.dispatchEvent(new Event('online'));
      
      const result = await onlinePromise;
      expect(result).toBe('you are online');
    });
  });

  describe('onDisconnect', () => {
    it('should emit "you are offline" when offline event is triggered', async () => {
      const offlinePromise = firstValueFrom(service.onDisconnect());
      
      // Simulate offline event
      window.dispatchEvent(new Event('offline'));
      
      const result = await offlinePromise;
      expect(result).toBe('you are offline');
    });
  });
});
