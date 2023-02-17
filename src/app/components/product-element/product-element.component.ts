import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css']
})
export class ProductElementComponent {
  @Input() product: any = {};
}
