import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CategoryCardItem {
  name: string;
  description?: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCardComponent {
  @Input() category!: CategoryCardItem;
}
