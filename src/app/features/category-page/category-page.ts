import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product/components/product-card/product-card';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCard],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPageComponent implements OnInit {
  slug = '';
  products: Product[] = [];
  displayedProducts: Product[] = [];
  category?: Category;
  nom = 'Catégorie';
  description = 'Découvrez une sélection soigneusement curatée.';
  imageUrl?: string;
  nombreProduits = 0;
  currentPage = 1;
  readonly pageSize = 6;
  totalPages = 1;
  readonly sortOptions = [
    { label: 'Plus récent', value: 'recent' },
    { label: 'Prix croissant', value: 'price-asc' },
    { label: 'Prix décroissant', value: 'price-desc' },
    { label: 'Popularité', value: 'popular' },
  ];
  selectedSort = 'recent';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.loadCategoryAndProducts();
  }

  private loadCategoryAndProducts(): void {
    this.categoryService.getCategoryWithProducts(this.slug).subscribe(({ category, products }) => {
      this.products = products;
      this.nombreProduits = products.length;

      if (!category) {
        this.category = undefined;
        this.nom = 'Catégorie introuvable';
        this.description = 'Cette catégorie n’est pas disponible pour le moment.';
        this.imageUrl = undefined;
        this.applySortingAndPagination();
        return;
      }

      this.category = category;
      this.nom = category.nom;
      this.description = category.description ?? 'Découvrez une sélection soigneusement curatée.';
      this.imageUrl = category.imageUrl;
      this.nombreProduits = products.length;
      this.applySortingAndPagination();
    });
  }

  onSortChange(value: string): void {
    this.selectedSort = value;
    this.currentPage = 1;
    this.applySortingAndPagination();
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.applySortingAndPagination();
  }

  get hasProducts(): boolean {
    return this.displayedProducts.length > 0;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  private applySortingAndPagination(): void {
    const sortedProducts = [...this.products].sort((a, b) => {
      switch (this.selectedSort) {
        case 'price-asc':
          return a.prix - b.prix;
        case 'price-desc':
          return b.prix - a.prix;
        case 'popular':
          return b.nombreVentes - a.nombreVentes;
        case 'recent':
        default:
          return b.dateCreation.getTime() - a.dateCreation.getTime();
      }
    });

    this.totalPages = Math.max(1, Math.ceil(sortedProducts.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedProducts = sortedProducts.slice(start, start + this.pageSize);
  }
}
