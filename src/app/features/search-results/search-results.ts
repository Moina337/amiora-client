import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { SearchService } from '../../core/services/search';
import { ProductSectionComponent } from '../../shared/components/product-section/product-section';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, ProductSectionComponent],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css',
})
export class SearchResults {

  private route = inject(ActivatedRoute);
  private searchService = inject(SearchService);

  query = '';
  resultats: Product[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] ?? '';
      this.resultats = this.searchService.rechercher(this.query);
    });
  }
}