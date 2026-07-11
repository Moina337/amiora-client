import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../core/services/produit';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category-page',
  standalone: true,
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPageComponent implements OnInit {
  slug!: string;
  products: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.loadProducts();
  }

  private loadProducts(): void {
    this.products = this.productService.getProductsByCategory(this.slug);
  }
}
