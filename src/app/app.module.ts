import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomePageComponentComponent } from './components/page-components/home-page-component/home-page-component.component';
import { HomeCategoriesComponent } from './components/home-components/home-categories/home-categories.component';
import { HomeProductsComponent } from './components/home-components/home-products/home-products.component';
import { HomeOffersComponent } from './components/home-components/home-offers/home-offers.component';
import { HomeRecentsComponent } from './components/home-components/home-recents/home-recents.component';
import { HomeFrontComponent } from './components/home-components/home-front/home-front.component';
import { ProductsShopComponent } from './components/page-components/products-shop/products-shop.component';
import { ProductDetailComponent } from './components/page-components/product-detail/product-detail.component';
import { ContactPageComponent } from './components/page-components/contact-page/contact-page.component';
import { CartPageComponent } from './components/page-components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/page-components/checkout-page/checkout-page.component';
import { CategoryElementComponent } from './components/home-components/cateogry-element/category-element.component';
import { ProductElementComponent } from './components/product-element/product-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponentComponent,
    HomeCategoriesComponent,
    HomeProductsComponent,
    HomeOffersComponent,
    HomeRecentsComponent,
    HomeFrontComponent,
    ProductsShopComponent,
    ProductDetailComponent,
    ContactPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    CategoryElementComponent,
    ProductElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
