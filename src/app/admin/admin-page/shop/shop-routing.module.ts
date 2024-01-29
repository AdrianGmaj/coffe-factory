import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';

const routes: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'addArticle', component: ShopAddComponent },
  { path: 'edit', component: ShopEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
