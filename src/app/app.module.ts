import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { Comp1Component } from './contacts/comp1/comp1.component';
import { Comp2Component } from './contacts/comp2/comp2.component';
import { Comp3Component } from './contacts/comp3/comp3.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}, 
  {path: 'contacts', component: ContactsComponent}, 
  {path: 'products', component: ProductListComponent},
  {path: '**', component: ErrorComponent}, 
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ErrorComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
