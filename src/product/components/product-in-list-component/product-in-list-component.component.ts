import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-in-list-component',
  templateUrl: './product-in-list-component.component.html',
  styleUrls: ['./product-in-list-component.component.scss']
})
export class ProductInListComponentComponent {
  @Input() product: Product | undefined;
  @Input() isProductAvailable: boolean;
  @Input() productRemaining: number;
  @Output() productPurchased: EventEmitter<Product> = new EventEmitter<Product>();

  onBuy() {
    this.productPurchased.emit(this.product);
  }
}
