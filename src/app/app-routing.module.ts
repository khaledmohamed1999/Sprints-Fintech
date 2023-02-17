import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/page-components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component:HomePageComponentComponent},
  {path:'detail',component:ProductDetailComponent},
  {path:'cart',component:CartPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'contact',component:ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
