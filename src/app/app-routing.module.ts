import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/page-components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';
import { SendMoneyComponent } from './components/page-components/send-money/send-money.component';
import { PayOnlineComponent } from './components/page-components/pay-online/pay-online.component';
import { RequestMoneyComponent } from './components/page-components/request-money/request-money.component';

const routes: Routes = [
  {path:'', component:HomePageComponentComponent},
  {path:'detail',component:ProductDetailComponent},
  {path:'cart',component:CartPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'send-money',component:SendMoneyComponent},
  {path:'request-money',component:RequestMoneyComponent},
  {path:'pay-online',component:PayOnlineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
