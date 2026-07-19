import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../core/services/produit';
import { ProductUtils } from '../../../shared/components/utils/product.utils';
import { ProductCard } from '../../product/components/product-card/product-card';

type TriOption = 'recent' | 'prix-asc' | 'prix-desc' | 'ventes';

const PRODUITS_PAR_PAGE = 8;

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  tousLesProduits: Product[] = [];
  produitsFiltres: Product[] = [];
  products: Product[] = []; // ← produits de la page courante uniquement

  categories: string[] = [];
  categorieSelectionnee = '';
  triSelectionne: TriOption = 'recent';

  pageActuelle = 1;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.tousLesProduits = this.productService.getAllProducts();
    this.categories = [...new Set(this.tousLesProduits.map(p => p.categorie))];
    this.appliquerFiltres();
  }

  onCategorieChange(): void {
    this.pageActuelle = 1; // ← on revient à la page 1 quand le filtre change
    this.appliquerFiltres();
  }

  onTriChange(): void {
    this.pageActuelle = 1;
    this.appliquerFiltres();
  }

  allerALaPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.pageActuelle = page;
    this.appliquerPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get totalPages(): number {
    return Math.ceil(this.produitsFiltres.length / PRODUITS_PAR_PAGE);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  private appliquerFiltres(): void {
    let resultat = this.categorieSelectionnee
      ? this.tousLesProduits.filter(p => p.categorie === this.categorieSelectionnee)
      : [...this.tousLesProduits];

    resultat = this.trier(resultat, this.triSelectionne);

    this.produitsFiltres = resultat;
    this.appliquerPagination();
  }

  private appliquerPagination(): void {
    const debut = (this.pageActuelle - 1) * PRODUITS_PAR_PAGE;
    const fin = debut + PRODUITS_PAR_PAGE;
    this.products = this.produitsFiltres.slice(debut, fin);
  }

  private trier(produits: Product[], tri: TriOption): Product[] {
    const copie = [...produits];

    switch (tri) {
      case 'prix-asc':
        return copie.sort((a, b) => ProductUtils.displayedPrice(a) - ProductUtils.displayedPrice(b));
      case 'prix-desc':
        return copie.sort((a, b) => ProductUtils.displayedPrice(b) - ProductUtils.displayedPrice(a));
      case 'ventes':
        return copie.sort((a, b) => b.nombreVentes - a.nombreVentes);
      case 'recent':
      default:
        return copie.sort((a, b) => b.dateCreation.getTime() - a.dateCreation.getTime());
    }
  }

}