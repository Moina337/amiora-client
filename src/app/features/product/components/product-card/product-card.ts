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
import { VendeurService } from '../../../../core/services/vendeur';



@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductPrice, ProductBadges, ProductRating, FavoriteButton, AddToCartButton, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  private panier = inject(Panier);

  private vendeurService = inject(VendeurService); // ← avec les autres inject()

  @Input({ required: true })
  product!: Product;

  @Input()
  context?: 'nouveau' | 'vedette' | 'promotion';

  @Output()
  addToCart = new EventEmitter<Product>();

  @Output()
  toggleFavorite = new EventEmitter<Product>();

   
get vendeur() {
  return this.vendeurService.getById(this.product.vendeurId);
}

  onAddToCart() {
    this.panier.ajouter(this.product);
    this.addToCart.emit(this.product);
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
    if (ProductUtils.hasPromotion(this.product)) {
      return [ProductUtils.getBadgePromotion(this.product)];
    }

    if (this.context) {
      return [];
    }

    return ProductUtils.getBadges(this.product);
  }

}