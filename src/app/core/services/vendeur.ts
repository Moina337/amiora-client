import { Injectable } from '@angular/core';

import { Vendeur } from '../../models/vendeur.model';
import { VENDEURS_MOCK } from '../../mocks/vendeurs.mock'; 

@Injectable({
  providedIn: 'root',
})
export class VendeurService {

  getAll(): Vendeur[] {
    return VENDEURS_MOCK;
  }

  getById(id: number): Vendeur | undefined {
    return VENDEURS_MOCK.find(v => v.id === id);
  }

  getBySlug(slug: string): Vendeur | undefined {
    return VENDEURS_MOCK.find(v => v.slug === slug);
  }

}