import { Injectable, inject } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from './produit';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private productService = inject(ProductService);

  rechercher(query: string, limit?: number): Product[] {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    const resultats = this.productService.getAllProducts().filter(product =>
      product.nom.toLowerCase().includes(q) ||
      product.categorie.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)
    );

    return limit ? resultats.slice(0, limit) : resultats;
  }
}