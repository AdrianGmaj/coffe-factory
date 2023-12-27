import { Injectable } from '@angular/core';
import { Product } from './product';
import { BasketItem } from './basket-item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: Array<BasketItem> = []
  constructor() { }

  getBasket() {
    return this.basket
  }

  addToBasket(product: Product) {
    const item = this.basket.find(element => element.product.id === product.id);

    if (item) {
      item.count += 1;
    } else {
      this.basket.push({ product: product, count: 1 });
    }
  }
}


