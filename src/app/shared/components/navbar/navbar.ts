import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Panier } from '../../../core/services/panier';
import { CartUi } from '../../../core/services/cart-ui';
import { SearchService } from '../../../core/services/search';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  panier = inject(Panier);
  cartUi = inject(CartUi);
  private searchService = inject(SearchService);
  private router = inject(Router);

  totalArticles = this.panier.totalArticles;

  searchQuery = signal('');
  suggestions = signal<Product[]>([]);
  showSuggestions = signal(false);
  menuOpen = signal(false);

  onSearchInput() {
    const q = this.searchQuery();
    if (q.trim().length < 2) {
      this.suggestions.set([]);
      this.showSuggestions.set(false);
      return;
    }
    this.suggestions.set(this.searchService.rechercher(q, 5));
    this.showSuggestions.set(true);
  }

  onSearchSubmit() {
    const q = this.searchQuery().trim();
    if (!q) return;
    this.showSuggestions.set(false);
    this.router.navigate(['/recherche'], { queryParams: { q } });
  }

  onSuggestionClick() {
    this.showSuggestions.set(false);
    this.searchQuery.set('');
  }

  onSearchBlur() {
    setTimeout(() => this.showSuggestions.set(false), 150);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  fermerMenu() {
    this.menuOpen.set(false);
  }

  ouvrirPanier() {
    this.cartUi.ouvrir();
  }
}