import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryService } from '../../core/services/category.service'; 
import { Category } from '../../models/category.model';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    CategoryCardComponent
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  categories: Category[] = [];

  loading = true;

  constructor(
    private readonly categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

}