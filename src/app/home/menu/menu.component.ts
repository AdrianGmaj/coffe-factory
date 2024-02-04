import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu:Array<CoffeeMenu>
menu$:Observable<Array<CoffeeMenu>>
  constructor( private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu()
    this.menu$ = this.menuService.getProducts()
  }

}
