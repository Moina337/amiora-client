import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Category } from '../../../models/category.model';
import { CategoryCardComponent, CategoryCardItem } from '../category-card/category-card';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySectionComponent {
  @Input() title = 'Catégories';
  @Input() subtitle = '';
  @Input() categories: Category[] = [];
  @Input() emptyMessage = 'Aucune catégorie disponible pour le moment.';

  toCategoryCardItem(category: Category): CategoryCardItem {
    return {
      name: category.nom,
      description: category.description,
      image: category.imageUrl,
      link: category.slug ? `/categories/${category.slug}` : undefined,
    };
  }
}
