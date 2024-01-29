import { Component, OnInit } from '@angular/core';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
menu:Array<CoffeeMenu>

displayedColumns:string[]=[

  'title',
  'img',
  'price',
  'actions'
  
]

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu()
  }

}
// id: number,
// img1: string,
// img2: string,
// img3: string,
// title: string,
// price: number,
// label: string,
// article:string,