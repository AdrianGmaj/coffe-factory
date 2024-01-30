import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/services/product';
import { ShopService } from 'src/app/services/shop.service';
import { DialogComponent } from './dialog/dialog.component';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shop: Array<Product>
  basket: Array<Product>
  product: Product
  constructor(private shopService: ShopService,
    private dialog: MatDialog,
    private basketService: BasketService) { }

  ngOnInit() {
    this.shop = this.shopService.getShop();

  }
  showDetails(id) {
    this.product = this.shop.find((product) => product.id == id)
    console.log(this.product)
    this.dialog.open(DialogComponent, {
      data: this.product
    })
  }
  buy(product) {
    this.basketService.addToBasket(product)
  }
}
