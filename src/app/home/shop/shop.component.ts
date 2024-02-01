import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/services/product';
import { ShopService } from 'src/app/services/shop.service';
import { DialogComponent } from './dialog/dialog.component';
import { BasketService } from 'src/app/services/basket.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shop: Array<Product>
  shop$: Observable<Array<Product>>
  basket: Array<Product>;

  constructor(private shopService: ShopService,
    private dialog: MatDialog,
    private basketService: BasketService) { }

  ngOnInit() {
    this.shop = this.shopService.getShop();
    this.shop$ = this.shopService.getProducts()

  }



  showDetails(product: Product) {
    console.log(product)
    this.dialog.open(DialogComponent, {
      data: product
    });
  }


  /**
    
      showDetails(id) {
        this.shopService.getProductById(id)
          .subscribe((product) => {
            console.log(product)
            this.dialog.open(DialogComponent, {
              data: product
            });
          })
      }
  */

  /** 
    showDetails(id) {
      this.shopService.getProducts()
        .pipe(
          map((products) => products.find(product => product.id === id))
        )
        .subscribe((product) => {
          console.log(product)
          this.dialog.open(DialogComponent, {
            data: product
          });
        })
    }
  **/

  buy(product) {
    this.basketService.addToBasket(product)
  }
}
