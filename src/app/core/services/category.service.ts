import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CATEGORIES_MOCK } from '../../mocks/categories.mock';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { ProductService } from './produit';

export interface CategoryWithProducts {
  category?: Category;
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly productService: ProductService) {}

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES_MOCK);
  }

  getCategoryBySlug(slug: string): Observable<Category | undefined> {
    return of(CATEGORIES_MOCK.find((category) => category.slug === slug));
  }

  getCategoryWithProducts(slug: string): Observable<CategoryWithProducts> {
    const category = CATEGORIES_MOCK.find((item) => item.slug === slug);
    const products = this.productService.getProductsByCategory(slug);

    return of({ category, products });
  }
}
