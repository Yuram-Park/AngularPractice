import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChart3Service } from './high-chart3.service';

@Component({
  selector: 'chart-list3',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-list3.component.html',
  styleUrl: './chart-list3.component.css'
})
export class ChartList3Component {

  constructor(private highChart3Service: HighChart3Service) {}

  Highcharts: typeof this.highChart3Service.Highcharts = this.highChart3Service.Highcharts;

  chartData: any;
  chartOptions: any;

  processedData = {
    type: 'line',
    data: [40, 70, 30, 50, 40, 70]
  };

  ngOnInit(){
    this.chartOptions = this.highChart3Service.makeChartData(this.processedData);
  }

}
