import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { Panier } from '../../../../core/services/panier'; 

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {

  private panier = inject(Panier);

  items = this.panier.items;

  totalArticles = this.panier.totalArticles;

  sousTotal = this.panier.totalPrix;

  fraisLivraison = computed(() => 0);

  total = computed(() => {
    return this.sousTotal() + this.fraisLivraison();
  });

}