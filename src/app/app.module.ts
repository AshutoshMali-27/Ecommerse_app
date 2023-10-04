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
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestProductComponent,
   HomeComponent,
   ProductsComponent,
   ProductDetailsComponent,
   CartComponent,
   OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
