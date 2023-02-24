import { AfterViewInit, Component } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-pay-online',
  templateUrl: './pay-online.component.html',
  styleUrls: ['./pay-online.component.css']
})
export class PayOnlineComponent  implements AfterViewInit {


    ngAfterViewInit(): void {
  
      // Vendor carousel
      $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
  
    }
  
  }
