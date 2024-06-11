import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicNetworkReachabilityComponent } from './ionic-network-reachability.component';

describe('IonicNetworkReachabilityComponent', () => {
  let component: IonicNetworkReachabilityComponent;
  let fixture: ComponentFixture<IonicNetworkReachabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicNetworkReachabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IonicNetworkReachabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
