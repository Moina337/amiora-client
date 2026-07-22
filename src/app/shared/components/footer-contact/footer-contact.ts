import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.css',
})
export class FooterContactComponent {

  readonly phone = '+269 000 00 00';
  readonly email = 'contact@amiora.com';
  readonly address = 'Moroni, Comores';

  readonly whatsapp = '2690000000';

}