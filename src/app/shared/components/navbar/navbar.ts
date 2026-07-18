import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Panier } from '../../../core/services/panier';
import { CartUi } from '../../../core/services/cart-ui';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  panier = inject(Panier);
  cartUi = inject(CartUi);

  totalArticles = this.panier.totalArticles;

  ouvrirPanier() {
    this.cartUi.ouvrir();
  }
}