import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { VendeurAuthService } from '../../../core/services/vendeur-auth';

@Component({
  selector: 'app-vendeur-inscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vendeur-inscription.html',
  styleUrl: './vendeur-inscription.css',
})
export class VendeurInscription {

  private fb = inject(FormBuilder);
  private vendeurAuth = inject(VendeurAuthService);
  private router = inject(Router);

  form = this.fb.group({
    nom: ['', Validators.required],
    ville: [''],
    description: [''],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const valeurs = this.form.value;

    const vendeur = this.vendeurAuth.inscrire({
      nom: valeurs.nom!,
      ville: valeurs.ville ?? undefined,
      description: valeurs.description ?? undefined,
    });

    this.router.navigate(['/vendeur/dashboard']);
  }
}