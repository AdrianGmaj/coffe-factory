import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

const routes: Routes = [
  { path: '', component: MenuListComponent },
  { path: 'addCoffee', component: MenuAddComponent },
  { path: 'edit', component: MenuEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
