import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../core/services/produit';
import { ProductUtils } from '../../../shared/components/utils/product.utils';
import { Panier } from '../../../core/services/panier'; // ← nouvelle ligne

import { ProductPrice } from '../../../shared/components/product-price/product-price';
import { ProductRating } from '../../../shared/components/product-rating/product-rating';
import { ProductBadges } from '../../../shared/components/product-badges/product-badges';
import { FavoriteButton } from '../../../shared/components/favorite-button/favorite-button';
import { AddToCartButton } from '../../../shared/components/add-to-cart-button/add-to-cart-button';
import { Breadcrumb, BreadcrumbItem } from '../../../shared/components/breadcrumb/breadcrumb';
import { ProductSectionComponent } from '../../../shared/components/product-section/product-section'; // ← nouvelle ligne
 import { VendeurService } from '../../../core/services/vendeur';
 import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductPrice, ProductRating, ProductBadges, FavoriteButton, 
    AddToCartButton, Breadcrumb, ProductSectionComponent, RouterLink ], 
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private panier = inject(Panier); // ← nouvelle ligne
 

// dans la classe :
private vendeurService = inject(VendeurService);


  descriptionEtendue = false;

  product?: Product;
  quantite = 1;
  isFavorite = false;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getById(id);
  }
   
  get vendeur() {
  return this.product ? this.vendeurService.getById(this.product.vendeurId) : undefined;
}
  get breadcrumbItems(): BreadcrumbItem[] {
    if (!this.product) return [];

    return [
      { label: 'Accueil', url: '/' },
      { label: this.product.categorie, url: '/categorie/' + this.product.categorie.toLowerCase() },
      { label: this.product.nom },
    ];
  }

  get hasPromotion() {
    return this.product ? ProductUtils.hasPromotion(this.product) : false;
  }

  get displayedPrice() {
    return this.product ? ProductUtils.displayedPrice(this.product) : 0;
  }

  get badges() {
    return this.product ? ProductUtils.getBadges(this.product) : [];
  }

  get produitsSimilaires(): Product[] { // ← nouveau getter
    if (!this.product) return [];
    return this.productService.getSimilarProducts(this.product);
  }

  increaseQuantite() {
    this.quantite++;
  }

  decreaseQuantite() {
    if (this.quantite > 1) {
      this.quantite--;
    }
  }

  onAddToCart() {
    if (this.product) {
      this.panier.ajouter(this.product, this.quantite); // ← vraie logique au lieu du console.log
    }
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}