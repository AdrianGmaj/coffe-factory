import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss']
})
export class ShopAddComponent implements OnInit {



  shopAddForm = new FormGroup({

    name: new FormControl('',
      [Validators.required]),
    img: new FormControl('',
      [Validators.required]),
    price: new FormControl('',
      [Validators.required]),
    para: new FormControl('',
      [Validators.required]),


  })
  constructor(private shopService: ShopService,
    private dialogRef: MatDialogRef<ShopAddComponent>) { }

  ngOnInit() {

  }
  addProduct(value) {
    this.shopService.addProduct(value).subscribe(response=>{
this.dialogRef.close()
    })
  }

  close(){
    this.dialogRef.close()
  }
}
// id: number,
// img:string;
// name: string,
// price: number,
// para: string