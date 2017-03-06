import { Component } from '@angular/core';
import {Portfolio} from './portfolio';
import {productList} from './portfolio.service';
import { StockDataService } from './stock.data.service';


@Component({
    templateUrl: './portfolio.component.html',
})

export class PortfolioComponent {

    selectedRow: Number;
    items: Portfolio[];
    public dataSpark: any[] = [
        936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007
    ];
    inputName = '';
    y: number;

    security: string;
    isin: any;
    livePrice: any;
    public data: any[] = [];
    public from: Date = new Date('2009/02/05');
    public to: Date = new Date('2011/10/07');

    constructor(private service: StockDataService) {
        this.items = productList;
        this.livePrice = 198.08;
        this.security = 'Google';

         this.service.get().then((data) => {
            this.data = data;
        });
   };

   setClickedRow = function(index: any, red: Portfolio){
            this.selectedRow = index;
            this.isin = red.ISIN;
            this.security = red.security;
            this.livePrice = red.livePrice;
        };

    computeValue(x: any, y: any) {
    const z = x * y;
    return z.toFixed(3);
    }



computePnl(x: any, y: any, z: any) {
    const t = x * (y - z);
    return t.toFixed(3);
};

    FilterBySecurity() {
      this.items = [];

      if (this.inputName !== '') {
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
