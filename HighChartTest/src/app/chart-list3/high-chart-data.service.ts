import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighChartDataService {

  constructor() { }

  processChartData(processedData: any) {
    return this.process[processedData.type](processedData);
  }

  private process: {[chart: string]: (processedData: any) => Object} = {
    'line': (processedData) => {
      const series: any[] = [];

      series.push({
        type: 'line',
        data: processedData.data
      })

      return {
        series: series
      }
    },
    'pie': (processedData) => {
      const series: any[] = [];

      series.push({
        type: 'pie',
        data: processedData.data
      })

      return {
        series: series
      }
    }
  }
}
