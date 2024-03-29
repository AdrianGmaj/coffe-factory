import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuCoffeeComponent } from './menu-coffee/menu-coffee/menu-coffee.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { LogInComponent } from './log-in/log-in/log-in.component';
import { AdminGuardService } from './services/admin-guard.service';





const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'menu-coffee/:id',
    component: MenuCoffeeComponent
  }, {
    path: 'blog-article/:id',
    component: BlogArticleComponent
  },
  , {
    path: 'about-us',
    component: AboutUsComponent
  },

  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,canActivate: [AdminGuardService],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
