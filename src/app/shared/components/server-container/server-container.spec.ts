import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerContainer } from './server-container';

describe('ServerContainer', () => {
  let component: ServerContainer;
  let fixture: ComponentFixture<ServerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
