import { Component } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {
  categories:any[] = [
    {name: 'Category 1', imageUrl: '/assets/img/cat-1.jpg'},
    {name: 'Category 2', imageUrl: '/assets/img/cat-2.jpg'},
    {name: 'Category 3', imageUrl: '/assets/img/cat-3.jpg'},
  ];
}
