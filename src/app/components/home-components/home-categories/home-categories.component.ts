import { Component } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {
  categories:any[] = [
    {name: 'Send Money', imageUrl: '/assets/img/send.png'},
    {name: 'Recieve Money', imageUrl: '/assets/img/recieve.png'},
    {name: 'Pay Online', imageUrl: '/assets/img/pay.png'},
  ];
}
