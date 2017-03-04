import { Component } from '@angular/core';


@Component({
   templateUrl: './grafikon.component.html',
})

export class GrafikonComponent {
    title = 'Hello World!';

private productList: any[] = [
  {'security': 'EQ-INTERNATIONAL', 'bid': 3.907, 'ask': 4.743},
  {'security': 'EQ-INTERNATIONAL', 'bid': 7.943, 'ask': 7.295},
  {'security': 'EQ-INTERNATIONAL', 'bid': 7.848, 'ask': 7.175},
  {'security': 'EQ-INTERNATIONAL', 'bid': 9.284, 'ask': 6.376},
  {'security': 'EQ-INTERNATIONAL', 'bid': 9.263, 'ask': 8.153}
]

    private series: any[] = [{
    name: 'BID',
    data: [3.907, 7.943, 7.848, 9.284, 9.263]
  }, {
    name: 'ASK',
    data: [4.743, 7.295, 7.175, 6.376, 8.153]
  }];
  private categories: string[] = ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05'];
}