import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-coffee',
  templateUrl: './menu-coffee.component.html',
  styleUrls: ['./menu-coffee.component.scss']
})
export class MenuCoffeeComponent implements OnInit {
coffeId: string;
coffee$:Observable<Array<CoffeeMenu>>

  constructor( private route: ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() {
this.coffeId = this.route.snapshot.paramMap.get('id')
    
    // this.coffee = this.menuService.getMenu().filter((coffee)=> coffee.id === parseInt(this.coffeId))
    this.coffee$ = this.menuService.getProducts().pipe(map((products)=>
products.filter((coffee)=> coffee.id === parseInt(this.coffeId) )
    ))
  }

}
