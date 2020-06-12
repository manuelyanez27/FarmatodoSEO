import { Component, OnInit } from '@angular/core';

declare var gtag;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList=[
    {
      id: 'dolex_forte_1',
      title: 'Dolex Forte 8 Tabs Congestión nasal, Dolor cabeza y fiebre',
      description: 'x8Tab.GSK Acetaminofén Fenilefrina Clorfenamina',
      price: '$8.900',
      quantity:1,
      showText:false,
      image:'https://lh3.googleusercontent.com/lS8_-MATUo82zYaBgwmZ_1KSSDEOlRDpB-2EmzZQlgw5YaVvSSjK9_kJIYePzCewf2G1fyQ54v9_zNsq6VTFOxWffK-_OkzIVZE9',
      altTextImage: 'dolex forte 8 tabletas'
    },
    {
      id: 'dolex_gripa_1',
      title: 'Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre',
      description: 'x12Tab.GSK Acetaminofén Fenilefrina Clorfenamina',
      price: '$11.200',
      quantity:1,
      showText:false,
      image:'https://lh3.googleusercontent.com/zq7FAApZmK-tGLnmcaQzlE3Wk-3bRk2wtZ-WmxUo_dcg-xWqj_wF4s0Baz7ATSrXD8QviRvKimPBb2sW-x7C5n0CcaDAqOxSOmV7',
      altTextImage: 'dolex gripa 12 tabletas'
    },
  ]

  AuthorizedProductIds = [
    'dolex_gripa_1',
    'dolex_forte_1'
  ]
 
  purchaseMessage = 'Compra exitosa';

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuantity(quantity: number){
    gtag('event', 'increase Quantity', {
      'event_category': 'Products',
      'event_label': 'Dolex'
    });

    return quantity +1 ;
  }

  decreaseQuantity(quantity: number){
    gtag('event', 'decrease Quantity', {
      'event_category': 'Products',
      'event_label': 'Dolex'
    });

    return quantity ? quantity -1 : 0;
  }

  purchase(productId: string){
    gtag('event', 'buy Product', {
      'event_category': 'Products',
      'event_label': 'Dolex'
    });
    for ( let i=0; i<this.AuthorizedProductIds.length; i=i+1){
      if(productId == this.AuthorizedProductIds[i]){
        return true;
      }
    }
    
    return false;
  }
}
