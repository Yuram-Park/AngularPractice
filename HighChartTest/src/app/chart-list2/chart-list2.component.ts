import { Component } from '@angular/core';
import { HighChartService } from './high-chart.service';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'chart-list2',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-list2.component.html',
  styleUrl: './chart-list2.component.css'
})
export class ChartList2Component {

  constructor(private highchartService: HighChartService) {}

  Highcharts: typeof this.highchartService.Highcharts = this.highchartService.Highcharts;
  chartOptions: any;

  ngOnInit() {
    this.chartOptions = this.highchartService.chartOptions;
  }

}
