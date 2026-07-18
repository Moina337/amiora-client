import { Injectable, signal, computed } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart.model';

const STORAGE_KEY = 'panier';

@Injectable({
  providedIn: 'root',
})
export class Panier {

  private itemsSignal = signal<CartItem[]>(this.loadFromStorage());

  items = this.itemsSignal.asReadonly();

  totalArticles = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantite, 0)
  );

  totalPrix = computed(() =>
    this.itemsSignal().reduce((sum, item) => {
      const prix = item.product.prixPromotion ?? item.product.prix;
      return sum + prix * item.quantite;
    }, 0)
  );

  ajouter(product: Product, quantite: number = 1): boolean {

    const items = this.itemsSignal();
    const existant = items.find(item => item.product.id === product.id);

    if (existant) {

      const nouvelleQuantite = existant.quantite + quantite;

      // Vérifie le stock disponible
      if (nouvelleQuantite > product.quantite) {
        return false;
      }

      this.mettreAJourQuantite(product.id, nouvelleQuantite);
      return true;
    }

    // Vérifie le stock lors du premier ajout
    if (quantite > product.quantite) {
      return false;
    }

    this.itemsSignal.set([
      ...items,
      {
        product,
        quantite
      }
    ]);

    this.saveToStorage();

    return true;
  }

  retirer(productId: number): void {

    this.itemsSignal.set(
      this.itemsSignal().filter(item => item.product.id !== productId)
    );

    this.saveToStorage();
  }

  mettreAJourQuantite(productId: number, quantite: number): boolean {

    if (quantite < 1) {
      this.retirer(productId);
      return true;
    }

    const item = this.itemsSignal().find(i => i.product.id === productId);

    if (!item) {
      return false;
    }

    // Vérification du stock
    if (quantite > item.product.quantite) {
      return false;
    }

    this.itemsSignal.set(
      this.itemsSignal().map(item =>
        item.product.id === productId
          ? { ...item, quantite }
          : item
      )
    );

    this.saveToStorage();

    return true;
  }

  vider(): void {

    this.itemsSignal.set([]);

    this.saveToStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.itemsSignal()));
  }

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}