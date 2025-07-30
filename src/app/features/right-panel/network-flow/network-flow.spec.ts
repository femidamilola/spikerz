import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFlow } from './network-flow';

describe('NetworkFlow', () => {
  let component: NetworkFlow;
  let fixture: ComponentFixture<NetworkFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
