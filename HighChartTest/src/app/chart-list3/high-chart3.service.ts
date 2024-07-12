import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighChartOptionService } from './high-chart-option.service';
import { HighChartDataService } from './high-chart-data.service';

@Injectable({
  providedIn: 'root'
})
export class HighChart3Service {

  Highcharts: typeof Highcharts = Highcharts;

  constructor(
    private highChartOptionService: HighChartOptionService,
    private highChartDataService: HighChartDataService
  ) { }

  // makeChartOptions(chartData: any){
  //   return this.highChartOptionService.generateChartOption(chartData);
  // }

  makeChartData(processedData: any){
    return this.highChartDataService.processChartData(processedData);
  }


}
