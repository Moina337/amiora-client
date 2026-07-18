import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Panier } from '../../core/services/panier'; 
import { CartUi } from '../../core/services/cart-ui'; 

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css',
})
export class CartDrawer {

  panier = inject(Panier);
  cartUi = inject(CartUi);

  items = this.panier.items;
  totalArticles = this.panier.totalArticles;
  totalPrix = this.panier.totalPrix;

  fermer() {
    this.cartUi.fermer();
  }

  augmenter(productId: number, quantiteActuelle: number) {
    this.panier.mettreAJourQuantite(productId, quantiteActuelle + 1);
  }

  diminuer(productId: number, quantiteActuelle: number) {
    this.panier.mettreAJourQuantite(productId, quantiteActuelle - 1);
  }

  retirer(productId: number) {
    this.panier.retirer(productId);
  }
}