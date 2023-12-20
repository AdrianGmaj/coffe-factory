import { Injectable } from '@angular/core';
import { CoffeeMenu } from './CoffeMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Array<CoffeeMenu> = [
    {
      id: 1,
      img1: "/assets/home/menu/black-coffee.jpg",
      img2: "/assets/home/menu/black-coffee.jpg",
      img3: "/assets/home/menu/black-coffee.jpg",
      title: "Black coffee",
      price: 3.99,
      label: "Intense black coffee with robust flavor",
      article:''
    },
    {
      id: 2,
      img1: "/assets/home/menu/caffee-latte.jpg",
      img2: "/assets/home/menu/caffee-latte.jpg",
      img3: "/assets/home/menu/caffee-latte.jpg",
      title: "Caffee late",
      price: 5.99,
      label: "Smooth and creamy caffe latte",
      article:''
    },
    {
      id: 3,
      img1: "/assets/home/menu/americano.jpg",
      img2: "/assets/home/menu/americano.jpg",
      img3: "/assets/home/menu/americano.jpg",
      title: "Americano",
      price: 4.99,
      label: "Bold and rich Americano blend",
      article:''
    },
    {
      id: 4,
      img1: "/assets/home/menu/machiatto.jpg",
      img2: "/assets/home/menu/machiatto.jpg",
      img3: "/assets/home/menu/machiatto.jpg",
      title: "Machiatto",
      price: 6.99,
      label: "Delicate layers of espresso and milk",
      article:''
    },
    {
      id: 5,
      img1: "/assets/home/menu/cappucino.jpg",
      img2: "/assets/home/menu/cappucino.jpg",
      img3: "/assets/home/menu/cappucino.jpg",
      title: "Cappucino",
      price: 5.99,
      label: "Classic and frothy cappuccino delight",
      article:''
    },
    {
      id: 6,
      img1: "/assets/home/menu/espresso.jpg",
      img2: "/assets/home/menu/espresso.jpg",
      img3: "/assets/home/menu/espresso.jpg",
      title: "Espresso",
      price: 3.49,
      label: "Strong and concentrated espresso shot",
      article:''
    },
    {
      id: 7,
      img1: "/assets/home/menu/iced-coffee1.jpg",
      img2: "/assets/home/menu/iced-coffee1.jpg",
      img3: "/assets/home/menu/iced-coffee1.jpg",
      title: "Iced coffe #1",
      price: 5.99,
      label: "Refreshing chilled coffee sensation",
      article:''
    },
    {
      id: 8,
      img1: "/assets/home/menu/iced-coffe2.jpg",
      img2: "/assets/home/menu/iced-coffe2.jpg",
      img3: "/assets/home/menu/iced-coffe2.jpg",
      title: "Iced coffe #2",
      price: 6.99,
      label: "Iced coffee topped with luscious ice cream",
      article:''
    },
    {
      id: 9,
      img1: "/assets/home/menu/mocha.jpg",
      img2: "/assets/home/menu/mocha.jpg",
      img3: "/assets/home/menu/mocha.jpg",
      title: "Mocha",
      price: 5.99,
      label: "Indulgent blend of chocolate and espresso",
      article:''
    },
    {
      id: 10,
      img1: "/assets/home/menu/cortado.jpg",
      img2: "/assets/home/menu/cortado.jpg",
      img3: "/assets/home/menu/cortado.jpg",
      title: "Cortado",
      price: 5.99,
      label: "Intense black coffee with robust flavor",
      article:''
    },
  ]
  constructor() { }


  getMenu() {
    return this.menu
  }
}



