import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurInscription } from './vendeur-inscription';

describe('VendeurInscription', () => {
  let component: VendeurInscription;
  let fixture: ComponentFixture<VendeurInscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendeurInscription],
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurInscription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
