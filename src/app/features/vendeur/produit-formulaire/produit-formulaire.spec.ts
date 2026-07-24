import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormulaire } from './produit-formulaire';

describe('ProduitFormulaire', () => {
  let component: ProduitFormulaire;
  let fixture: ComponentFixture<ProduitFormulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitFormulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitFormulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
