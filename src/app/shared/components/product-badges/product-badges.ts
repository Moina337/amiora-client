import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProductBadge } from '../../../models/product-badge.model';

@Component({
  selector: 'app-product-badges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-badges.html',
  styleUrl: './product-badges.css',
})
export class ProductBadges {
  @Input({ required: true })
  badges: ProductBadge[] = [];

  @Input()
  size: 'sm' | 'lg' = 'sm';
}