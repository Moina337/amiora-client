import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { Product } from '../../../models/product.model'; 
import { ProductUtils } from '../utils/product.utils';
import { ProductPrice } from '../product-price/product-price'; 
import { ProductRating } from '../product-rating/product-rating'; 
import { ProductBadges } from '../product-badges/product-badges'; 
import { FavoriteButton } from '../favorite-button/favorite-button'; 
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button'; 
import { RouterLink } from '@angular/router';

import { Panier } from '../../../core/services/panier';  // ← nouvelle ligne, ajuste le chemin

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductPrice, ProductBadges, ProductRating, FavoriteButton, AddToCartButton, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  private panier = inject(Panier); // ← nouvelle ligne

  @Input({ required: true })
  product!: Product;

  @Output()
  addToCart = new EventEmitter<Product>();

  @Output()
  toggleFavorite = new EventEmitter<Product>();

  onAddToCart() {
    this.panier.ajouter(this.product); // ← vraie logique
    this.addToCart.emit(this.product); // ← on garde l'event pour compatibilité
  }

  onFavorite() {
    this.toggleFavorite.emit(this.product);
  }

  get hasPromotion() {
    return ProductUtils.hasPromotion(this.product);
  }

  get displayedPrice() {
    return ProductUtils.displayedPrice(this.product);
  }

  get reduction() {
    return ProductUtils.reduction(this.product);
  }

  get isNew() {
    return ProductUtils.isNew(this.product);
  }

  get isFeatured() {
    return ProductUtils.isFeatured(this.product);
  }

  get badges() {
    return ProductUtils.getBadges(this.product);
  }

}