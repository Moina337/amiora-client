import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { Product } from '../../../../models/product.model';
import { ProductUtils } from '../../../../shared/components/utils/product.utils'; 
import { ProductPrice } from '../../../../shared/components/product-price/product-price';
import { ProductRating } from '../../../../shared/components/product-rating/product-rating';
import { ProductBadges } from '../../../../shared/components/product-badges/product-badges';
import { FavoriteButton } from '../../../../shared/components/favorite-button/favorite-button';
import { RouterLink } from '@angular/router';
import { AddToCartButton } from '../../../../shared/components/add-to-cart-button/add-to-cart-button';
import { Panier } from '../../../../core/services/panier';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductPrice, ProductBadges, ProductRating, FavoriteButton, RouterLink, AddToCartButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input({ required: true })
  product!: Product;

  @Output()
  addToCart = new EventEmitter<Product>();

  @Output()
  toggleFavorite = new EventEmitter<Product>();

  private panier = inject(Panier);

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