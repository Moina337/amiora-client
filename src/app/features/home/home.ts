import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/produit';
import { CategorySectionComponent } from '../../shared/components/category-section/category-section';
import { ProductSectionComponent } from '../../shared/components/product-section/product-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductSectionComponent, CategorySectionComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: Product[] = [];
  newProducts: Product[] = [];
  bestSellerProducts: Product[] = [];
  promotionProducts: Product[] = [];
  bestSellers: Product[] = [];
  promotions: Product[] = [];
  categories: Category[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {

    this.featuredProducts = this.productService.getFeaturedProducts();

    this.newProducts = this.productService.getNewProducts();

    this.bestSellerProducts = this.productService.getBestSellerProducts();
    this.bestSellers = this.bestSellerProducts;

    this.promotionProducts = this.productService.getPromotionProducts();
    this.promotions = this.promotionProducts;

  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

}