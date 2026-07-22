import { Component } from '@angular/core';
import { FooterBrandComponent } from '../footer-brand/footer-brand';
import { FooterLinksComponent } from '../footer-links/footer-links';
import {FooterLink} from '../footer-links/footer-link.model';
import { FooterContactComponent } from '../footer-contact/footer-contact';

@Component({
  selector: 'app-footer',
  imports: [FooterBrandComponent,FooterLinksComponent,FooterContactComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  boutiqueLinks: FooterLink[] = [
  { label: 'Tous les produits', url: '/products' },
  { label: 'Catégories', url: '/categories' },
  { label: 'Nouveautés', url: '/products/new' },
  { label: 'Promotions', url: '/products/promotions' },
];

helpLinks: FooterLink[] = [
  { label: 'Comment commander ?', url: '/help/order' },
  { label: 'Livraison', url: '/help/delivery' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Contact', url: '/contact' },
];

companyLinks: FooterLink[] = [
  { label: 'À propos', url: '/about' },
  { label: 'Confidentialité', url: '/privacy' },
  { label: 'Conditions', url: '/terms' },
];
}
