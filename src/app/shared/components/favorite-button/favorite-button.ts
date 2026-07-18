import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css',
})
export class FavoriteButton {
  @Input()
  isFavorite = false;

  @Input()
  size: 'sm' | 'lg' = 'sm';

  @Output()
  toggle = new EventEmitter<void>();

  onClick() {
    this.toggle.emit();
  }
}