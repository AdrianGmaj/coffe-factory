import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  menuAddForm = new FormGroup({

    title: new FormControl('',
      [Validators.required]),
    img1: new FormControl('',
      [Validators.required]),
    img2: new FormControl('',
      [Validators.required]),
    img3: new FormControl('',
      [Validators.required]),
    price: new FormControl('',
      [Validators.required]),
    label: new FormControl('',
      [Validators.required]),
    article: new FormControl('',
      [Validators.required]),


  })
  constructor( private dialogRef: MatDialogRef<MenuAddComponent>,
    private menuService: MenuService) { }

  ngOnInit() {
    
  }
  addCoffee(value) {
    this.menuService.addProduct(value).subscribe(response=>{
this.dialogRef.close()
    })
  }
  close(){
    this.dialogRef.close()
  }
}
// img1: string,
// img2: string,
// img3: string,
// title:string,
// price:number,
// label:string,
// article:string,