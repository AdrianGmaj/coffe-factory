import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input()
  product: Product

  @Output()
  details: EventEmitter<Product> = new EventEmitter<Product>()

  @Output()
  buy: EventEmitter<Product> = new EventEmitter<Product>()
  constructor(
) { }

  ngOnInit() {
  }


  showDetails(product: Product): void {
    this.details.emit(product)
  }


  buyProduct(product: Product): void {
   this.buy.emit(product)
  }
}
