import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductCard } from '../../../features/product/components/product-card/product-card';  // ← ajuste le chemin selon l'emplacement réel

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSectionComponent {
  @Input() title = 'Produits';
  @Input() subtitle = '';
  @Input() products: Product[] = [];
  @Input() emptyMessage = 'Aucun produit disponible pour le moment.';
  @Input() context?: 'nouveau' | 'vedette' | 'promotion';
  @Input() containerClass = 'mb-16';
}