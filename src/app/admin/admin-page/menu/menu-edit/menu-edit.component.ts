import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MenuResponse } from 'src/app/services/Menu-response';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {
  menuEditForm: FormGroup

  constructor(private dialogRef: MatDialogRef<MenuEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuResponse,
    private menuService:MenuService) { }

  ngOnInit() {
    this.menuEditForm = new FormGroup({

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

  }
  editArticle(id, value){
    this.menuService.editProduct(id, value).subscribe((response)=>{
    this.dialogRef.close
    })
}
}