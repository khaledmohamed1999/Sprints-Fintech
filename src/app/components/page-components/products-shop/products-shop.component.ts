import { Component } from '@angular/core';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsShopComponent {
  products:any[] = [
    {name: 'Product 1', imageUrl: '/assets/img/product-1.jpg'},
    {name: 'Product 2', imageUrl: '/assets/img/product-2.jpg'},
    {name: 'Product 3', imageUrl: '/assets/img/product-3.jpg'},
  ];
}
