import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuCoffeeComponent } from './menu-coffee/menu-coffee/menu-coffee.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';





const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'menu-coffee/:id',
    component:MenuCoffeeComponent
  },{
    path:'blog-article/:id',
    component:BlogArticleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
