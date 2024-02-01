import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { OpinionsRoutingModule } from './opinions-routing.module';
import { OpinionsListComponent } from './opinions-list/opinions-list.component';
import { OpinionsEditComponent } from './opinions-edit/opinions-edit.component';


@NgModule({
  declarations: [OpinionsListComponent, OpinionsEditComponent],
  imports: [
    CommonModule,
    OpinionsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatTableModule
  ]
})
export class OpinionsModule { }
