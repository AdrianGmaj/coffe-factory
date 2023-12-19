import { Injectable } from '@angular/core';
import { CoffeeMenu } from './CoffeMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Array<CoffeeMenu> = [
    {
      id: 1,
      img: "/assets/home/menu/black-coffee.jpg",
      title: "Black coffee",
      price: 3.99,
      label: "Intense black coffee with robust flavor"
    },
    {
      id: 2,
      img: "/assets/home/menu/caffee-latte.jpg",
      title: "Caffee late",
      price: 5.99,
      label: "Smooth and creamy caffe latte"
    },
    {
      id: 3,
      img: "/assets/home/menu/americano.jpg",
      title: "Americano",
      price: 4.99,
      label: "Bold and rich Americano blend"
    },
    {
      id: 4,
      img: "/assets/home/menu/machiatto.jpg",
      title: "Machiatto",
      price: 6.99,
      label: "Delicate layers of espresso and milk"
    },
    {
      id: 5,
      img: "/assets/home/menu/cappucino.jpg",
      title: "Cappucino",
      price: 5.99,
      label: "Classic and frothy cappuccino delight"
    },
    {
      id: 6,
      img: "/assets/home/menu/espresso.jpg",
      title: "Espresso",
      price: 3.49,
      label: "Strong and concentrated espresso shot"
    },
    {
      id: 7,
      img: "/assets/home/menu/iced-coffee1.jpg",
      title: "Iced coffe #1",
      price: 5.99,
      label: "Refreshing chilled coffee sensation"
    },
    {
      id: 8,
      img: "/assets/home/menu/iced-coffe2.jpg",
      title: "Iced coffe #2",
      price: 6.99,
      label: "Iced coffee topped with luscious ice cream"
    },
    {
      id: 9,
      img: "/assets/home/menu/mocha.jpg",
      title: "Mocha",
      price: 5.99,
      label: "Indulgent blend of chocolate and espresso"
    },
    {
      id: 10,
      img: "/assets/home/menu/cortado.jpg",
      title: "Cortado",
      price: 5.99,
      label: "Intense black coffee with robust flavor"
    },
  ]
  constructor() { }


  getMenu() {
    return this.menu
  }
}



