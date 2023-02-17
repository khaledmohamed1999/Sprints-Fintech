import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrls: ['./category-element.component.css'],
})
export class CategoryElementComponent {
  @Input() category: any = {};
}
