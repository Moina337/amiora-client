import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './shared/components/navbar/navbar';
import { CartDrawer } from './features/cart-drawer/cart-drawer'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CartDrawer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('amiora');
}