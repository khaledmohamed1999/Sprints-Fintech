import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserComponent } from './components/admin/user/admin-user/admin-user.component';
import { TransactionsComponent } from './components/admin/user/transactions/transactions.component';
import { CartPageComponent } from './components/page-components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';
import { SiteComponent } from './components/site/site.component';


const routes: Routes = [
  {path:'admin', component:AdminComponent,children:[
  {path:'user', component:AdminUserComponent},
  {path:'user/transactions',component:TransactionsComponent}
  ]},
  {path:'',component:SiteComponent,children:[
  {path:'', component:HomePageComponentComponent},
  {path:'detail',component:ProductDetailComponent},
  {path:'cart',component:CartPageComponent},
  {path:'checkout',component:CheckoutPageComponent},
  {path:'contact',component:ContactPageComponent},]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
