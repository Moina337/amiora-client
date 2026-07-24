import { Injectable, signal } from '@angular/core';

import { Vendeur } from '../../models/vendeur.model';

const STORAGE_KEY = 'vendeur_actuel';

@Injectable({
  providedIn: 'root',
})
export class VendeurAuthService {

  private vendeurSignal = signal<Vendeur | null>(this.loadFromStorage());

  vendeurActuel = this.vendeurSignal.asReadonly();

  estConnecte(): boolean {
    return this.vendeurSignal() !== null;
  }

  inscrire(data: { nom: string; description?: string; ville?: string }): Vendeur {
    const slug = this.genererSlug(data.nom);

    const nouveauVendeur: Vendeur = {
      id: Date.now(), // id unique simple pour la simulation
      nom: data.nom,
      slug,
      description: data.description,
      ville: data.ville,
      dateInscription: new Date(),
      statut: 'actif',
    };

    this.vendeurSignal.set(nouveauVendeur);
    this.saveToStorage(nouveauVendeur);

    return nouveauVendeur;
  }

  deconnecter() {
    this.vendeurSignal.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  private genererSlug(nom: string): string {
    return nom
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // enlève les accents
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  private saveToStorage(vendeur: Vendeur) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vendeur));
  }

  private loadFromStorage(): Vendeur | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}