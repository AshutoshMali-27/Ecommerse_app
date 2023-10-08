import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Component/product/product.component';
import { SuggestProductComponent } from './Component/suggest-product/suggest-product.component';
import { HomeComponent } from './Component/Home/home.component';
import { ProductsComponent } from './Component/products/products.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrderComponent } from './Component/order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { PageNotFoundComponentComponent } from './Component/page-not-found-component/page-not-found-component.component';
import { DirectiveDirective } from './directive.directive';
import { DirectiveProductDirective } from './directive-product.directive';
//import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestProductComponent,
   HomeComponent,
   ProductsComponent,
   ProductDetailsComponent,
   CartComponent,
   OrderComponent,
   HeaderComponent,
   FooterComponent,
   PageNotFoundComponentComponent,
   DirectiveDirective,
   DirectiveProductDirective,
   RegisterComponent,
   LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
