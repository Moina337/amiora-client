import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model'; 
import { PRODUCTS_MOCK } from '../../mocks/products.mock'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProducts(): Product[] {
    return PRODUCTS_MOCK;
  }

  getFeaturedProducts(): Product[] {
    return PRODUCTS_MOCK
      .filter(product => product.estEnVedette)
      .slice(0, 8);
  }

  getPromotionProducts(): Product[] {
    return PRODUCTS_MOCK
      .filter(product => product.prixPromotion != null)
      .slice(0, 8);
  }

  getNewProducts(): Product[] {
    return [...PRODUCTS_MOCK]
      .sort((a, b) => b.dateCreation.getTime() - a.dateCreation.getTime())
      .slice(0, 8);
  }

  getBestSellerProducts(): Product[] {
    return [...PRODUCTS_MOCK]
      .sort((a, b) => b.nombreVentes - a.nombreVentes)
      .slice(0, 8);
  }

  getProductsByCategory(slug: string): Product[] {
    return PRODUCTS_MOCK.filter((product) => product.categorie.toLowerCase() === slug.toLowerCase());
  }

  getById(id: number): Product | undefined {
  return PRODUCTS_MOCK.find(product => product.id === id);
}

getSimilarProducts(product: Product, limit: number = 4): Product[] {
  return PRODUCTS_MOCK
    .filter(p => p.categorie === product.categorie && p.id !== product.id)
    .slice(0, limit);
}

getByVendeur(vendeurId: number): Product[] {
  return PRODUCTS_MOCK.filter(p => p.vendeurId === vendeurId);
}

}