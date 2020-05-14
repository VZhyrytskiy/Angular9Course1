import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: Product[];

  constructor(
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts() {
    this.products = this.productServiceService.getProducts();
  }

}
