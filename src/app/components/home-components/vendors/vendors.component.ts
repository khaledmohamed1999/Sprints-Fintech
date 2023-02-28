import { Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  vendors:any[]=[
{imageUrl: '/assets/img/etisalat.png'},
{imageUrl: '/assets/img/vodafone.png'},
{imageUrl: '/assets/img/orange.png'},
{imageUrl: '/assets/img/btech.png'},
{imageUrl: '/assets/img/elec.jfif'},
{imageUrl: '/assets/img/we.jfif'},
  ];

}