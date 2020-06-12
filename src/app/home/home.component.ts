import { Component, OnInit } from '@angular/core';

declare var gtag;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToProduct() {
    gtag('event', 'gotoProductPage', {
      'event_category': 'Products',
      'event_label': 'Dolex'
    });
  }

}
