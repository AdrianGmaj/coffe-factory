import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketItem } from 'src/app/services/basket-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-side',
  templateUrl: './basket-side.component.html',
  styleUrls: ['./basket-side.component.scss']
})
export class BasketSideComponent implements OnInit {

@Output()
close:EventEmitter<void> =new EventEmitter<void>()

  buyBasket = false;
  basket: Array<BasketItem> = [];
  buyForm = new FormGroup({
    nameAndSurname: new FormControl('',
      [Validators.required]),
    phone: new FormControl('',
      [Validators.required,]
    ),
    address: new FormControl('',
      [Validators.required]),
    cardNumber: new FormControl('',
      [Validators.required]),
    month: new FormControl('',
      [Validators.required, Validators.minLength(7)]),

    year: new FormControl('',
      [Validators.required]),
    cvv: new FormControl('',
      [Validators.required])
  })
  constructor(private basketService:BasketService) { }

  ngOnInit() {
    this. basket = this.basketService.getBasket()
  }
  removeCount(item: BasketItem): void {
    if (item.count > 1) {
      item.count -= 1;
    }
  }

  addCount(item: BasketItem): void {
    item.count += 1;

  }

  openBuy() {
    this.buyBasket = true
  }

  buyFormSubmit(formValue) {

    this.basket.length = 0;
    this.closeBasket() ;
    this.buyBasket = false
    alert('thank you!')
    formValue = ''
  }

  basketTotal() {
    return this.basket
      .map(item => item.product.price * item.count)
      .reduce((prev, current) => prev + current, 0)
  }

  closeBasket(){
    this.close.emit()
  }
}
