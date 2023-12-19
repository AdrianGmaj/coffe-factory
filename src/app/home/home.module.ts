import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
