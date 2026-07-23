import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vendeur } from '../../../models/vendeur.model';
import { Product } from '../../../models/product.model';
import { VendeurService } from '../../../core/services/vendeur';
import { ProductService } from '../../../core/services/produit';
import { ProductSectionComponent } from '../../../shared/components/product-section/product-section';

@Component({
  selector: 'app-boutique-detail',
  standalone: true,
  imports: [CommonModule, ProductSectionComponent],
  templateUrl: './boutique-detail.html',
  styleUrl: './boutique-detail.css',
})
export class BoutiqueDetail {

  private route = inject(ActivatedRoute);
  private vendeurService = inject(VendeurService);
  private productService = inject(ProductService);

  vendeur?: Vendeur;
  produits: Product[] = [];

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.vendeur = this.vendeurService.getBySlug(slug);

    if (this.vendeur) {
      this.produits = this.productService.getByVendeur(this.vendeur.id);
    }
  }
}