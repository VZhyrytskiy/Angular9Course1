import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/interfaces/Product';
import { GuidHelperService } from 'src/app/shared/guid-helper/guid-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts(): Product[] {
    const products = [
      {
        id: GuidHelperService.NewGuid(),
        name: 'Product1',
        price: 100
      } as Product,
      {
        id: GuidHelperService.NewGuid(),
        name: 'Product2',
        price: 200
      } as Product,
      {
        id: GuidHelperService.NewGuid(),
        name: 'Product3',
        price: 300
      } as Product,
    ];
    return products;
  }
}