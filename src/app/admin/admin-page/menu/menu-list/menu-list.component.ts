import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';
import { MenuAddComponent } from '../menu-add/menu-add.component';
import { Observable } from 'rxjs';
import { MenuResponse } from 'src/app/services/Menu-response';
import { MenuEditComponent } from '../menu-edit/menu-edit.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menu: Array<CoffeeMenu>
  menuCoffee$: Observable<Array<MenuResponse>>


  displayedColumns: string[] = [

    'title',
    'img',
    'price',
    'actions'

  ]

  constructor(private menuService: MenuService, private dialog: MatDialog) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu()
    this.menuCoffee$ = this.menuService.getProducts()
  }

  addDialog() {
    this.dialog.open(MenuAddComponent)
  }

  editProduct(element) {


    this.dialog.open(MenuEditComponent, {
      data: element
    })
  }

  deleteProduct(id) {
    this.menuService.deleteProduct(id).subscribe(() => {
      this.menuCoffee$ = this.menuService.getProducts()
      console.log(id)
    })
  }}
// id: number,
// img1: string,
// img2: string,
// img3: string,
// title: string,
// price: number,
// label: string,
// article:string,