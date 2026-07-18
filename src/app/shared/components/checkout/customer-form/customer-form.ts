import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css',
})
export class CustomerFormComponent {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.customerForm = this.fb.group({

      nom: ['', Validators.required],

      prenom: ['', Validators.required],

      telephone: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],

      email: [''],

      ile: ['', Validators.required],

      ville: ['', Validators.required],

      quartier: ['', Validators.required],

      adresse: ['', Validators.required],

      commentaire: [''],

    });

  }

}