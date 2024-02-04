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
    private menuService: MenuService) { }

  ngOnInit() {
    this.menuEditForm = new FormGroup({

      title: new FormControl(this.data.title,
        [Validators.required]),
      img1: new FormControl(this.data.img1,
        [Validators.required]),
      img2: new FormControl(this.data.img2,
        [Validators.required]),
      img3: new FormControl(this.data.img3,
        [Validators.required]),
      price: new FormControl(this.data.price,
        [Validators.required]),
      label: new FormControl(this.data.label,
        [Validators.required]),
      article: new FormControl(this.data.article,
        [Validators.required]),


    })

  }
  editArticle(id, value) {
    this.menuService.editProduct(id, value).subscribe((response) => {
      this.dialogRef.close()
    })
  }
  close() {
    this.dialogRef.close()
  }
}