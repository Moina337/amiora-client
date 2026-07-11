import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'categories/:slug',
    loadComponent: () =>
      import('./features/category-page/category-page').then((m) => m.CategoryPageComponent),
  },
];
