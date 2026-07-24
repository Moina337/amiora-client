import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { VendeurAuthService } from '../../../core/services/vendeur-auth';
import { ProductService } from '../../../core/services/produit';

@Component({
  selector: 'app-produit-formulaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produit-formulaire.html',
  styleUrl: './produit-formulaire.css',
})
export class ProduitFormulaire {

  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private vendeurAuth = inject(VendeurAuthService);
  private router = inject(Router);

  vendeur = this.vendeurAuth.vendeurActuel;

  form = this.fb.group({
    nom: ['', Validators.required],
    description: ['', Validators.required],
    prix: [0, [Validators.required, Validators.min(1)]],
    prixPromotion: [null as number | null],
    imageUrl: ['', Validators.required],
    categorie: ['', Validators.required],
    quantite: [1, [Validators.required, Validators.min(0)]], // <-- Ajouté ici
    estEnVedette: [false],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.vendeur();
    if (!v) return;

    const valeurs = this.form.value;

    this.productService.ajouter({
      nom: valeurs.nom!,
      description: valeurs.description!,
      prix: valeurs.prix!,
      prixPromotion: valeurs.prixPromotion ?? undefined,
      imageUrl: valeurs.imageUrl!,
      categorie: valeurs.categorie!,
      quantite: valeurs.quantite!, // <-- Envoyé ici au service
      estEnVedette: valeurs.estEnVedette ?? false,
      vendeurId: v.id,
    });

    this.router.navigate(['/vendeur/dashboard']);
  }
}
