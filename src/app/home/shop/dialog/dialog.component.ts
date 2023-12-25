import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasketService } from 'src/app/services/basket.service';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private basketService: BasketService) { }

  ngOnInit() {
    console.log(this.data)
  }
  close() {
    this.dialogRef.close()
  }
  add(product: Product) {
    this.basketService.addToBasket(product)
    this.dialogRef.close()
  }
}
