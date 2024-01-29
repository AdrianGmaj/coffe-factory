import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  shop: Array<Product>
  displayedColumns:string[]=[

    'name',
    'img',
    'price',
    'actions'
    
  ]
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shop = this.shopService.getShop()
  }

}
// id: number,
// img:string;
// name: string,
// price: number,
// para: string