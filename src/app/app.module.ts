import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing-module';
import { MenuCoffeeComponent } from './menu-coffee/menu-coffee/menu-coffee.component';
import { FooterComponent } from './footer/footer.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [	
    AppComponent,
    ToolbarComponent,
    MenuCoffeeComponent,
    FooterComponent,
    BlogArticleComponent,
    ContactComponent,
    NewsletterComponent,
      AboutUsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatBadgeModule, MatSidenavModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
