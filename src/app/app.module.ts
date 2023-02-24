import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { HomeCategoriesComponent } from './components/home-components/home-categories/home-categories.component';
import { HomeFrontComponent } from './components/home-components/home-front/home-front.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { CategoryElementComponent } from './components/home-components/cateogry-element/category-element.component';
import { ProductElementComponent } from './components/product-element/product-element.component';
import { VendorsComponent } from './components/home-components/vendors/vendors.component';
import { TransactionHistoryPageComponent } from './components/page-components/transaction-history-page/transaction-history-page.component';
import { SendMoneyComponent } from './components/page-components/send-money/send-money.component';
import { RequestMoneyComponent } from './components/page-components/request-money/request-money.component';
import { PayOnlineComponent } from './components/page-components/pay-online/pay-online.component';
import { PayBillsItemsComponent } from './components/page-components/pay-bills-items/pay-bills-items.component';
import { WalletPageComponent } from './components/page-components/wallet-page/wallet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponentComponent,
    HomeCategoriesComponent,
    HomeFrontComponent,
    ProductDetailComponent,
    ContactPageComponent,
    CheckoutPageComponent,
    CategoryElementComponent,
    ProductElementComponent,
    VendorsComponent,
    TransactionHistoryPageComponent,
    SendMoneyComponent,
    RequestMoneyComponent,
    PayOnlineComponent,
    PayBillsItemsComponent
    WalletPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
