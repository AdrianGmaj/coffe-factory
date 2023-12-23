import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { RatingComponent } from './rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarousellComponent } from './rating/carousell/carousell.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    AboutUsComponent,
    ServicesComponent,
    MenuComponent,
    BlogComponent,
    RatingComponent,
    CarousellComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
