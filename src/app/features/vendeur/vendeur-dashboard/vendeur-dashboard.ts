import { CommonModule } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

import { VendeurAuthService } from '../../../core/services/vendeur-auth';
import { ProductService } from '../../../core/services/produit';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-vendeur-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vendeur-dashboard.html',
  styleUrl: './vendeur-dashboard.css',
})
export class VendeurDashboard {

  vendeurAuth = inject(VendeurAuthService);
  private productService = inject(ProductService);

  vendeur = this.vendeurAuth.vendeurActuel;

  produits: Product[] = [];

  constructor() {
    const v = this.vendeur();
    if (v) {
      this.produits = this.productService.getByVendeur(v.id);
    }
  }

  get totalVentes(): number {
    return this.produits.reduce((sum, p) => sum + p.nombreVentes, 0);
  }

  get chiffreAffaires(): number {
    return this.produits.reduce((sum, p) => {
      const prix = p.prixPromotion ?? p.prix;
      return sum + prix * p.nombreVentes;
    }, 0);
  }

  deconnecter() {
    this.vendeurAuth.deconnecter();
  }
}