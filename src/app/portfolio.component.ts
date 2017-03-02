import { Component } from '@angular/core';
import {Portfolio} from './portfolio';
import {productList} from './portfolio.service';


@Component({
    templateUrl: './portfolio.component.html',
})

export class PortfolioComponent {

    selectedRow: Number;
    items: Portfolio[];

    inputName = '';
    y: number;

    secyrity: string;
    isin: any;
    constructor() {
        this.items = productList;
   };

   setClickedRow = function(index: any, red: Portfolio){
            this.selectedRow = index;
            this.isin = red.ISIN;
            this.security = red.security;
        };

    computeValue(x: any, y: any) {
    var z = x * y;
    return z.toFixed(3);
    }



computePnl(x: any, y: any, z: any) {
    var t = x * (y - z);
    return t.toFixed(3);
};

    FilterBySecurity() {
      this.items = [];

      if (this.inputName != '') {
            productList.forEach(element => {
                if (element.security.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                  this.items.push(element);
               }
            });
      }else {
         this.items = productList;
      }
   }
}