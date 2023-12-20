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
      article: 'Embrace the allure of simplicity with our Black Coffee, meticulously handcrafted from a curated selection of the finest coffee beans, precisely roasted to perfection. Every sip reveals a robust and invigorating flavor, awakening your senses with its bold notes and lingering aftertaste. Perfectly brewed for your ultimate enjoyment, this timeless classic promises a captivating experience that transcends ordinary blends. Satisfy your coffee cravings with a cup that exudes elegance and sophistication, inviting you to savor the essence of pure coffee bliss in every indulgent moment.'
    },
    {
      id: 2,
      img1: "/assets/home/menu/caffee-latte.jpg",
      img2: "/assets/home/menu/caffee-latte.jpg",
      img3: "/assets/home/menu/caffee-latte.jpg",
      title: "Caffee late",
      price: 5.99,
      label: "Smooth and creamy caffe latte",
      article: 'Elevate your coffee journey with our Caffe Latte, a delightful fusion of expertly pulled espresso and lusciously steamed milk, meticulously crafted to create a velvety canvas of taste. This harmonious symphony presents a delicate balance of bold coffee notes and creamy smoothness, allowing you to immerse yourself in a sensory masterpiece. Each sip captivates with its rich aroma, a tribute to the skilled baristas who bring this masterpiece to life. Experience the art of coffee perfection in a cup that reflects the passion and dedication we pour into every blend.'
    },
    {
      id: 3,
      img1: "/assets/home/menu/americano.jpg",
      img2: "/assets/home/menu/americano.jpg",
      img3: "/assets/home/menu/americano.jpg",
      title: "Americano",
      price: 4.99,
      label: "Bold and rich Americano blend",
      article: 'Awaken your senses with the invigorating allure of our Americano, an exquisite blend of meticulously brewed espresso and precisely measured hot water. The result is a medium-bodied masterpiece that delights with its layers of complexity, a symphony of flavors that dance on your palate. Savor the essence of rich coffee beans sourced from the worlds finest estates, perfectly extracted to deliver an unparalleled coffee experience. Whether its a morning ritual or an afternoon pick-me-up, our Americano promises to tantalize your taste buds and provide the fuel to conquer your day.'
    },
    {
      id: 4,
      img1: "/assets/home/menu/machiatto.jpg",
      img2: "/assets/home/menu/machiatto.jpg",
      img3: "/assets/home/menu/machiatto.jpg",
      title: "Machiatto",
      price: 6.99,
      label: "Delicate layers of espresso and milk",
      article: 'Indulge in a visual and gustatory masterpiece, as our Latte Machiatto showcases the delicate artistry of coffee creation. Expertly crafted by our skilled baristas, this masterpiece begins with a shot of our premium espresso, carefully poured over a canvas of velvety steamed milk. The result is a captivating work of coffee art, where the contrasting layers evoke a symphony of flavors that unfold with each delightful sip. Immerse yourself in a sensory experience that celebrates the true essence of coffee, as the delicate sweetness of milk harmonizes with the boldness of espresso, creating a magical journey for your taste buds.'
    },
    {
      id: 5,
      img1: "/assets/home/menu/cappucino.jpg",
      img2: "/assets/home/menu/cappucino.jpg",
      img3: "/assets/home/menu/cappucino.jpg",
      title: "Cappucino",
      price: 5.99,
      label: "Classic and frothy cappuccino delight",
      article: 'Enchant your palate with the timeless elegance of our Cappuccino, an extraordinary blend of handpicked coffee beans, skillfully roasted to perfection. Expertly prepared by our passionate baristas, this indulgent creation begins with a shot of robust espresso, expertly combined with creamy steamed milk, before being crowned with a delicate layer of froth. The result is a sensory symphony that tantalizes your taste buds with each sip. Experience the art of coffee craftsmanship, where the harmonious blend of flavors and textures delivers a truly exquisite coffee indulgence that transcends ordinary coffee beverages.'
    },
    {
      id: 6,
      img1: "/assets/home/menu/espresso.jpg",
      img2: "/assets/home/menu/espresso.jpg",
      img3: "/assets/home/menu/espresso.jpg",
      title: "Espresso",
      price: 3.49,
      label: "Strong and concentrated espresso shot",
      article: 'Savor the pure intensity and complexity of our Espresso, a single shot packed with bold flavors and unmatched depth. Crafted from our carefully curated selection of premium coffee beans, this masterpiece undergoes meticulous roasting to extract the optimal essence of each bean. The result is a concentrated brew that showcases the true character of coffee, capturing its boldness and deep complexity in every invigorating sip. Immerse yourself in the essence of coffee purity, as this artisanal creation delivers a remarkable experience that embodies the soul of exceptional coffee craftsmanship.'
    },
    {
      id: 7,
      img1: "/assets/home/menu/iced-coffee1.jpg",
      img2: "/assets/home/menu/iced-coffee1.jpg",
      img3: "/assets/home/menu/iced-coffee1.jpg",
      title: "Iced coffe #1",
      price: 5.99,
      label: "Refreshing chilled coffee sensation",
      article: 'Discover the epitome of refreshment with our Iced Coffee, a perfect union of rich coffee flavors and chill that invigorates your senses on warm days. Meticulously prepared by our skilled baristas, this delightful creation starts with premium coffee beans expertly brewed to perfection. It is then gently poured over ice, allowing the bold flavors to meld with the coolness, delivering an invigorating symphony that captivates your palate. Perfectly balanced and exquisitely refreshing, our Iced Coffee promises to be your go-to companion for a revitalizing coffee experience.'
    },
    {
      id: 8,
      img1: "/assets/home/menu/iced-coffe2.jpg",
      img2: "/assets/home/menu/iced-coffe2.jpg",
      img3: "/assets/home/menu/iced-coffe2.jpg",
      title: "Iced coffe #2",
      price: 6.99,
      label: "Iced coffee topped with luscious ice cream",
      article: 'Surrender to indulgence with our Ice Coffee, a symphony of flavors and textures that takes your taste buds on a delightful journey. Expertly crafted with smooth espresso poured over a bed of ice, this enticing creation is then crowned with a luxurious scoop of creamy ice cream. The result is a delectable fusion of chill and richness, where the velvety smoothness of coffee blends harmoniously with the luscious creaminess of ice cream. Perfect for warm days or whenever you crave a refreshing treat, this indulgent masterpiece promises pure delight in every heavenly spoonful.'
    },
    {
      id: 9,
      img1: "/assets/home/menu/mocha.jpg",
      img2: "/assets/home/menu/mocha.jpg",
      img3: "/assets/home/menu/mocha.jpg",
      title: "Mocha",
      price: 5.99,
      label: "Indulgent blend of chocolate and espresso",
      article: 'Immerse yourself in decadence with our Mocha, an alluring fusion of bold espresso, velvety chocolate, and perfectly steamed milk. Crafted to perfection by our passionate baristas, this indulgent delight tantalizes your taste buds with every luxurious sip. Experience the divine marriage of premium coffee and rich chocolate, harmonizing to create a sumptuous masterpiece that offers the ultimate indulgence. Perfectly balanced and irresistibly smooth, our Mocha beckons you to savor the opulence of this beloved classic, where the harmonious blend of flavors delivers pure bliss in every unforgettable moment.'
    },
    {
      id: 10,
      img1: "/assets/home/menu/cortado.jpg",
      img2: "/assets/home/menu/cortado.jpg",
      img3: "/assets/home/menu/cortado.jpg",
      title: "Cortado",
      price: 5.99,
      label: "Intense black coffee with robust flavor",
      article: 'Unleash your taste buds delight with our Cortado, an artful composition that marries the boldness of espresso with the luscious creaminess of equal parts steamed milk. Carefully prepared by our talented baristas, this captivating creation offers a balanced and nuanced coffee experience. The result is a sensory symphony that showcases the true artistry of coffee, allowing you to savor the rich complexities of the beans in every delightful sip. Immerse yourself in the elegant simplicity of our Cortado, a true work of coffee craftsmanship that embodies the soul of coffee perfection.'
    },
  ]
  constructor() { }


  getMenu() {
    return this.menu
  }
}



