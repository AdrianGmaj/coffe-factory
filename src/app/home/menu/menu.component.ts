import { Component, OnInit } from '@angular/core';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu:Array<CoffeeMenu>
  constructor( private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu()
  }

}
