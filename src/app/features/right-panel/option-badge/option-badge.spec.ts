import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBadge } from './option-badge';

describe('OptionItem', () => {
  let component: OptionBadge;
  let fixture: ComponentFixture<OptionBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionBadge]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OptionBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
