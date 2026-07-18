import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart-button.html',
  styleUrl: './add-to-cart-button.css',
})
export class AddToCartButton {
  @Input()
  label = 'Panier';

  @Input()
  size: 'sm' | 'lg' = 'sm';

  @Output()
  addToCart = new EventEmitter<void>();

  onClick() {
    this.addToCart.emit();
  }
}