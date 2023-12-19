import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    AboutUsComponent,
    ServicesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
