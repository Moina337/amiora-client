import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../../models/product.model';
import { ProductUtils } from '../../../../shared/components/utils/product.utils'; 

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
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

  onAddToCart() {
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
    return ProductUtils.getBadges(this.product);
}

}