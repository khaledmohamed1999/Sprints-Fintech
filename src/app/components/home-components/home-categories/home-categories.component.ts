import { Component } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {
  categories:any[] = [
    {name: 'Send Money', imageUrl: '/assets/img/cat-1.jpg'},
    {name: 'Recieve Money', imageUrl: '/assets/img/cat-2.jpg'},
    {name: 'Pay Online', imageUrl: '/assets/img/cat-3.jpg'},
  ];
}
