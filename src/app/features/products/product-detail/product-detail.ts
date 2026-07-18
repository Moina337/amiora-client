import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../core/services/produit';// ← ajuste le chemin si différent
import { ProductUtils } from '../../../shared/components/utils/product.utils';

import { ProductPrice } from '../../../shared/components/product-price/product-price';
import { ProductRating } from '../../../shared/components/product-rating/product-rating';
import { ProductBadges } from '../../../shared/components/product-badges/product-badges';
import { FavoriteButton } from '../../../shared/components/favorite-button/favorite-button';
import { AddToCartButton } from '../../../shared/components/add-to-cart-button/add-to-cart-button';
import { Breadcrumb, BreadcrumbItem } from '../../../shared/components/breadcrumb/breadcrumb'; 

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductPrice, ProductRating, ProductBadges, FavoriteButton, AddToCartButton,Breadcrumb],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product?: Product;
  quantite = 1;
  isFavorite = false;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getById(id);
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
      console.log('Ajouté au panier :', this.product, 'quantité :', this.quantite);
      // TODO: brancher ton vrai service panier ici
    }
  }

  onFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}