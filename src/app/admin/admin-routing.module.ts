import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin-page/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./admin-page/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./admin-page/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./admin-page/shop/shop.module').then(m => m.ShopModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
