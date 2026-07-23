import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { ProductList } from './features/products/product-list/product-list';
import { ProductDetail } from './features/products/product-detail/product-detail';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/admin/dashboard/dashboard';
import { CategoryPageComponent } from './features/category-page/category-page';
import { Categories } from './features/categories/categories';
import { SearchResults } from './features/search-results/search-results';
import { BoutiqueDetail } from './features/boutique/boutique-detail/boutique-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'shop', component: ProductList },
  { path: 'categories', component: Categories },
  { path: 'boutique/:slug', component: BoutiqueDetail },
  { path: 'produit/:id', component: ProductDetail },
  { path: 'recherche', component: SearchResults },
  { path: 'categories/:slug', component: CategoryPageComponent },
  { path: 'categorie/:slug', component: CategoryPageComponent },
  { path: 'panier', component: Cart }, // ← nouvelle ligne
  { path: 'checkout', component: Checkout },
  { path: 'connexion', component: Login },
  { path: 'inscription', component: Register },
  { path: 'admin', component: Dashboard },
  { path: '**', redirectTo: '' },
];