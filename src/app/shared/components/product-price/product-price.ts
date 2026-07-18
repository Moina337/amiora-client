import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-price.html',
  styleUrl: './product-price.css',
})
export class ProductPrice {
  @Input({ required: true })
  displayedPrice!: number;

  @Input()
  originalPrice?: number;

  @Input()
  hasPromotion = false;

  @Input()
  size: 'sm' | 'lg' = 'sm';
}