import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [BlogListComponent,
    BlogEditComponent,
    BlogAddComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
    , MatTableModule
  ]
})
export class BlogModule { }
