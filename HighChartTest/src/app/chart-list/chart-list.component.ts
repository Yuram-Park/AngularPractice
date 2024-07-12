import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'chart-list',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.css',
})
export class ChartListComponent {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {}

  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [50, 40, 60, 45, 70, 42, 60],
        type: 'line',
      },
    ],
  };
}
