import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Panier } from '../../core/services/panier'; // ← ajuste le chemin selon l'emplacement de cart.ts

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  panier = inject(Panier);

  items = this.panier.items;
  totalArticles = this.panier.totalArticles;
  totalPrix = this.panier.totalPrix;

  augmenter(productId: number, quantiteActuelle: number) {
    this.panier.mettreAJourQuantite(productId, quantiteActuelle + 1);
  }

  diminuer(productId: number, quantiteActuelle: number) {
    this.panier.mettreAJourQuantite(productId, quantiteActuelle - 1);
  }

  retirer(productId: number) {
    this.panier.retirer(productId);
  }

  vider() {
    this.panier.vider();
  }
}