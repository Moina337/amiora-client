import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../../models/category.model';
import { CATEGORIES_MOCK } from '../../mocks/categories.mock';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES_MOCK);
  }

  getCategoryBySlug(slug: string): Observable<Category | undefined> {
    return of(CATEGORIES_MOCK.find((category) => category.slug === slug));
  }
}
