import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MenuListComponent,
    MenuEditComponent,
    MenuAddComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatTableModule,
  ]
})
export class MenuModule { }
