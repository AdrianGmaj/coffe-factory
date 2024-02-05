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
import { ShopComponent } from './shop/shop.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { DialogComponent } from './shop/dialog/dialog.component';
import { DialogNavComponent } from '../toolbar/dialog-nav/dialog-nav.component';
import { ShopCardComponent } from './shop/shop-card/shop-card.component';
import { EnjoyComponent } from './enjoy/enjoy.component';



@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    AboutUsComponent,
    ServicesComponent,
    MenuComponent,
    BlogComponent,
    RatingComponent,
    CarousellComponent,
    ShopComponent,
    DialogComponent,
    DialogNavComponent,
    ShopCardComponent,
    EnjoyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,

  ]
})
export class HomeModule { }
