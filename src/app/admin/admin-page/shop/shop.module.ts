import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ShopListComponent,
    ShopAddComponent,
    ShopEditComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ShopModule { }
