import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPanel } from './central-panel';

describe('CentralPanel', () => {
  let component: CentralPanel;
  let fixture: ComponentFixture<CentralPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
