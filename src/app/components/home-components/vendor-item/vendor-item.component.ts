import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-item',
  templateUrl: './vendor-item.component.html',
  styleUrls: ['./vendor-item.component.css']
})
export class VendorItemComponent {
  @Input() vendor: any = {};
}
