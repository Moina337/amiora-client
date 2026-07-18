import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-rating.html',
  styleUrl: './product-rating.css',
})
export class ProductRating {
  @Input()
  note = 5;

  @Input()
  nombreAvis = 0;

  @Input()
  size: 'sm' | 'lg' = 'sm';
}