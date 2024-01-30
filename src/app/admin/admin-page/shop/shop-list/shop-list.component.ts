import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/services/product';
import { ShopService } from 'src/app/services/shop.service';
import { ShopAddComponent } from '../shop-add/shop-add.component';
import { ProductResponse } from 'src/app/services/ProductResponse';
import { Observable } from 'rxjs';
import { ShopEditComponent } from '../shop-edit/shop-edit.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  shop: Array<Product>;
  products$: Observable<Array<ProductResponse>>
  displayedColumns: string[] = [

    'name',
    'img',
    'price',
    'actions'

  ]

  constructor(private shopService: ShopService, private dialog: MatDialog) { }

  ngOnInit() {
    this.shop = this.shopService.getShop()
    this.products$ = this.shopService.getProducts()
  }

  addDialog() {
    this.dialog.open(ShopAddComponent)
      .afterClosed().subscribe(() => {
        console.log('djalog jest zamkniety')
        this.products$ = this.shopService.getProducts()
      })
  }

  editProduct(element) {
   
   
    this.dialog.open(ShopEditComponent,{
      data: element
    })
  }

  deleteProduct(id) {
    this.shopService.deleteProduct(id).subscribe(() => {
      this.products$ = this.shopService.getProducts()
      console.log(id)
    })

  }
}
// id: number,
// img:string;
// name: string,
// price: number,
// para: string