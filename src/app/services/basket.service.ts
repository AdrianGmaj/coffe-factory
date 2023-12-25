import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: Array<Product> = []
  constructor() { }

  getBasket() {
    return this.basket
  }

  addToBasket(product: Product) {
    this.basket.push(product)
  }
}
