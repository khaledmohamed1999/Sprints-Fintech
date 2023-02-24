import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pay-bills-items',
  templateUrl: './pay-bills-items.component.html',
  styleUrls: ['./pay-bills-items.component.css']
})
export class PayBillsItemsComponent {
  @Input() name: string | undefined;
  @Input() url: string | undefined;
  @Input() img: string | undefined;
}
