import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CustomerFormComponent } from '../../shared/components/checkout/customer-form/customer-form';
import { OrderSummary } from '../../shared/components/checkout/order-summary/order-summary';
import { DeliveryMethod } from '../../shared/components/checkout/delivery-method/delivery-method';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    CustomerFormComponent,OrderSummary,DeliveryMethod
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

}