import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home.component';
import { ProductsComponent } from './Component/products/products.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrderComponent } from './Component/order/order.component';
import { PageNotFoundComponentComponent } from './Component/page-not-found-component/page-not-found-component.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrderComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
