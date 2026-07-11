import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSectionComponent {
  @Input() title = 'Produits';
  @Input() subtitle = '';
  @Input() products: Product[] = [];
  @Input() emptyMessage = 'Aucun produit disponible pour le moment.';
  @Input() metaText = '';
  @Input() badgeText?: string;
  @Input() badgeClass = '';
  @Input() priceMode: 'default' | 'sales' | 'promotion' = 'default';
  @Input() containerClass = 'mb-16';
}
