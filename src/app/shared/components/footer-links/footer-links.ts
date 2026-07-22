import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FooterLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-links.html',
  styleUrl: './footer-links.css',
})
export class FooterLinksComponent {

  @Input({ required: true })
  title!: string;

  @Input()
  links: FooterLink[] = [];

}