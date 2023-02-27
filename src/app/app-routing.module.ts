import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserComponent } from './components/admin/user/admin-user/admin-user.component';
import { TransactionsComponent } from './components/admin/user/transactions/transactions.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';
import { SiteComponent } from './components/site/site.component';
import { SendMoneyComponent } from './components/page-components/send-money/send-money.component';
import { PayOnlineComponent } from './components/page-components/pay-online/pay-online.component';
import { RequestMoneyComponent } from './components/page-components/request-money/request-money.component';
import { WalletPageComponent } from './components/page-components/wallet-page/wallet-page.component';
import { PayBillsComponent } from './components/page-components/pay-bills/pay-bills.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent,children:[
  {path:'user', component:AdminUserComponent},
  {path:'user/transactions',component:TransactionsComponent}
  ]},
  {path:'',component:SiteComponent,children:[
  {path:'', component:HomePageComponentComponent},
  {path:'about',component:ProductDetailComponent},
  {path:'wallet',component:WalletPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'send-money',component:SendMoneyComponent},
  {path:'request-money',component:RequestMoneyComponent},
  {path:'pay-online',component:PayOnlineComponent},
  {path:'pay-bills',component:PayBillsComponent},]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
