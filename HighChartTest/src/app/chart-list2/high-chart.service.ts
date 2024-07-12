import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighChartService {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [48, 60, 72],
        type: 'pie'
      }
    ]
  };
}
