import { TestBed } from '@angular/core/testing';

import { AngularReachabilityService } from './angular-reachability.service';

describe('AngularReachabilityService', () => {
  let service: AngularReachabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReachabilityService);
  });

  it('should be created', async () => {
    expect(await service.isReachable('https://httpbin.org/')).toBeTrue();
  });
});
