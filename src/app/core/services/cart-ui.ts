import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartUi {

  isOpen = signal(false);

  ouvrir() {
    this.isOpen.set(true);
  }

  fermer() {
    this.isOpen.set(false);
  }

  toggle() {
    this.isOpen.update(v => !v);
  }
}