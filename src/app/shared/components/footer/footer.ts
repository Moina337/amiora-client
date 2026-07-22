import { Component } from '@angular/core';
import { FooterBrandComponent } from '../footer-brand/footer-brand';

@Component({
  selector: 'app-footer',
  imports: [FooterBrandComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
