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
import { FormsModule } from '@angular/forms';
import { DialogSearchComponent } from './toolbar/dialog-search/dialog-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuCoffeeComponent,
    FooterComponent,
    BlogArticleComponent,
    ContactComponent,
    NewsletterComponent,
    AboutUsComponent,
    DialogSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatBadgeModule, MatSidenavModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    AdminModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
