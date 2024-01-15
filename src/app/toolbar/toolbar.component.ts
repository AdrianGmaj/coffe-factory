import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../services/basket.service';
import { Product } from '../services/product';
import { BasketItem } from '../services/basket-item';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { MenuService } from '../services/menu.service';
import { CoffeeMenu } from '../services/CoffeMenu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  basket: Array<BasketItem> = [];
  coffeeMenu: Array<CoffeeMenu> = []

  constructor(private router: Router,
    private basketService: BasketService,
    private dialog: MatDialog,
    private menu: MenuService) { }

  basketOpened = false;
  sideOpened = false;


  ngOnInit() {
    this.basket = this.basketService.getBasket()
    this.coffeeMenu = this.menu.getMenu()

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;
    if (this.router.url === '/') {

      if (window.scrollY > element.clientHeight * 3) {
        element.classList.add('scrolled');
      } else {
        element.classList.remove('scrolled');
      }
    } else {

      element.classList.add('scrolled');
    }
  }

  numberOfItemsInBasket(): number {
    return this.basket
      .map(item => item.count)
      .reduce((prev, current) => prev + current, 0)
  }

  removeCount(item: BasketItem): void {
    if (item.count > 1) {
      item.count -= 1;
    }
  }

  addCount(item: BasketItem): void {
    item.count += 1;

  }


  showSearch() {
    this.dialog.open(DialogSearchComponent, {
      data: this.coffeeMenu
    })
  }
}
