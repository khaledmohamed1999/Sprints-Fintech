import { Component } from '@angular/core';

@Component({
  selector: 'app-home-recents',
  templateUrl: './home-recents.component.html',
  styleUrls: ['./home-recents.component.css']
})
export class HomeRecentsComponent {
  products:any[] = [
    {name: 'Product 1', imageUrl: '/assets/img/product-1.jpg'},
    {name: 'Product 2', imageUrl: '/assets/img/product-2.jpg'},
    {name: 'Product 3', imageUrl: '/assets/img/product-3.jpg'},
  ];
}
