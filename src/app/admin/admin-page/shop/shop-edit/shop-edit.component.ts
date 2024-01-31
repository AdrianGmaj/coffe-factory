import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductResponse } from 'src/app/services/ProductResponse';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
productEditForm: FormGroup

  constructor(private dialogRef: MatDialogRef<ShopEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductResponse,
    private shopService: ShopService) { }

  ngOnInit() {
    console.log(this.data)
    this.productEditForm = new FormGroup({

      name: new FormControl(this.data.name),
      img: new FormControl(this.data.img),
      price: new FormControl(this.data.price),
      para: new FormControl(this.data.para),
  
    })


  }

  editArticle(id, value){
    this.shopService.editProduct(id, value).subscribe((response)=>{
    this.dialogRef.close
    })
}
}