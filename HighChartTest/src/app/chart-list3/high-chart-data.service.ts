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
    'treemap': (processedData) => {
      const series: any[] = [];

      series.push({
        title: {
          text: processedData.title
        },
        subtitle: {
          text: processedData.subtitle
        }
      }
      ,{
        name: processedData.name,
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        allowDrillToNode: true,
        animationLimit: 1000,
        dataLabels: {
          enabled: false,
        },
        levels: [
          {
            level: 1,
            dataLabels: {
              enabled: true,
            },
            borderWidth: 3,
            levelIsConstant: false,
          },
          {
            level: 1,
            dataLabels: {
              style: {
                fontSize: '14px',
              },
            },
          },
        ],
        accessibility: {
          exposeAsGroupOnly: true,
        },
        data: processedData.data,
      });

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
