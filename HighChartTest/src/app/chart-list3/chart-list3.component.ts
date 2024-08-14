import { Component, OnInit } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChart3Service } from './high-chart3.service';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';
import { CommonModule } from '@angular/common';

// TreemapModule(Highcharts);


@Component({
  selector: 'chart-list3',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './chart-list3.component.html',
  styleUrl: './chart-list3.component.css',
})
export class ChartList3Component {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options | undefined;

  ngOnInit() {
    this.initializeHighchartsModules();
    this.initializeChart();
  }

  async initializeHighchartsModules() {
    const TreemapModule = await import('highcharts/modules/treemap');
    TreemapModule.default(Highcharts);
  }

  initializeChart() {
    this.chartOptions = {
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#0000ff',
      },
      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          clip: false,
          data: [
            {
              name: 'A',
              value: 6,
              colorValue: 1,
            },
            {
              name: 'B',
              value: 6,
              colorValue: 2,
            },
            {
              name: 'C',
              value: 4,
              colorValue: 3,
            },
            {
              name: 'D',
              value: 3,
              colorValue: 4,
            },
            {
              name: 'E',
              value: 2,
              colorValue: 5,
            },
            {
              name: 'F',
              value: 2,
              colorValue: 6,
            },
            {
              name: 'G',
              value: 1,
              colorValue: 7,
            },
          ],
        },
      ],
      title: {
        text: 'Highcharts Treemap',
      },
    };
  }
};

  // processedData = {
  //   title: '과학기술표준 연구분야 분류1',
  //   subtitle: '과학기술표준 연구분야 분류1',
  //   name: '과학기술표준 연구분야 분류1',
  //   type: 'treemap',
  //   data: [
  //     {
  //       id: '물리학',
  //       name: '물리학',
  //       value: 60,
  //     },
  //     {
  //       id: '정보/통신',
  //       name: '정보/통신',
  //       value: 20,
  //     },
  //     {
  //       id: '수학',
  //       name: '수학',
  //       value: 20,
  //     },
  //     {
  //       name: '원자/분자물리',
  //       value: 50,
  //       parent: '물리학',
  //     },
  //     {
  //       name: '광학',
  //       value: 30,
  //       parent: '물리학',
  //     },
  //     {
  //       name: '응집 물질 물리',
  //       value: 40,
  //       parent: '물리학',
  //     },
  //     {
  //       name: '정보 이론',
  //       value: 50,
  //       parent: '정보/통신',
  //     },
  //     {
  //       name: '기타정보/통신',
  //       value: 30,
  //       parent: '정보/통신',
  //     },
  //     {
  //       name: '정보보호',
  //       value: 40,
  //       parent: '정보/통신',
  //     },
  //   ],
  // };

  // ngOnInit() {
  //   this.chartOptions = this.highChart3Service.makeChartData(
  //     this.processedData
  //   );
  //   console.log(this.chartOptions)
  // }
// }
