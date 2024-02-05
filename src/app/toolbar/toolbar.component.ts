import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {  Router } from '@angular/router';
import { BasketService } from '../services/basket.service';
import { BasketItem } from '../services/basket-item';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { MenuService } from '../services/menu.service';
import { DialogNavComponent } from './dialog-nav/dialog-nav.component';
import { Observable } from 'rxjs';
import { MenuResponse } from '../services/Menu-response';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  coffeeMenu$: Observable<Array<MenuResponse>> 
  basketOpened = false;
  sideOpened = false;
  basket: Array<BasketItem>


  constructor(private router: Router,
    private basketService: BasketService,
    private dialog: MatDialog,
    private menu: MenuService) { }




  ngOnInit() {
    this.basket = this.basketService.getBasket();
    this.coffeeMenu$ = this.menu.getProducts()
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




  showSearch() {
    this.dialog.open(DialogSearchComponent, {
      data: this.coffeeMenu$,

    })
  }
  showSide() {
    this.dialog.open(DialogNavComponent, {
      data: this.coffeeMenu$,
      position: { top: '0px', left: '0px' }
    })
  }

closeBasket(){
  this.basketOpened = false
}


}
