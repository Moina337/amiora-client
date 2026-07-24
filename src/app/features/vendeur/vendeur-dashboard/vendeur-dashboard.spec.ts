import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurDashboard } from './vendeur-dashboard';

describe('VendeurDashboard', () => {
  let component: VendeurDashboard;
  let fixture: ComponentFixture<VendeurDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendeurDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
