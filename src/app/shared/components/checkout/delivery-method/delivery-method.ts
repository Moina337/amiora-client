import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

export type DeliveryMethodType = 'WHATSAPP' | 'PAY_ON_DELIVERY';

@Component({
  selector: 'app-delivery-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-method.html',
  styleUrl: './delivery-method.css',
})
export class DeliveryMethod {

  @Output()
  methodChange = new EventEmitter<DeliveryMethodType>();

  selectedMethod: DeliveryMethodType = 'WHATSAPP';

  select(method: DeliveryMethodType): void {

    this.selectedMethod = method;

    this.methodChange.emit(method);

  }

}