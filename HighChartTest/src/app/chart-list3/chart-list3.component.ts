import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChart3Service } from './high-chart3.service';

@Component({
  selector: 'chart-list3',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart-list3.component.html',
  styleUrl: './chart-list3.component.css',
})
export class ChartList3Component {
  //constructor(private highChart3Service: HighChart3Service) {}

  Highcharts: typeof Highcharts = Highcharts;

  chartData: any;
  chartOptions: Highcharts.Options = {
    title: {
      text: '과학기술표준 연구분야 분류1',
    },
    subtitle: {
      text: '과학기술표준 연구분야 분류1',
    },
    series: [
      {
        name: '과학기술표준 연구분야 분류1',
        type: 'treemap',
        dataLabels: {
          enabled: false,
        },

        accessibility: {
          exposeAsGroupOnly: true,
        },
        data: [
          {
            id: 'Central',
            name: 'Central',
            value: 378148,
            color: '#f2f8fd',
          },
          {
            id: 'Naitasiri',
            name: 'Naitasiri',
            value: 177678,
            parent: 'Central',
          },
          {
            id: 'Namosi',
            name: 'Namosi',
            value: 7871,
            parent: 'Central',
          },
          {
            id: 'Rewa',
            name: 'Rewa',
            value: 108016,
            parent: 'Central',
          },
          {
            id: 'Serua',
            name: 'Serua',
            value: 20031,
            parent: 'Central',
          },
          {
            id: 'Tailevu',
            name: 'Tailevu',
            value: 64552,
            parent: 'Central',
          },
          {
            id: 'Western',
            name: 'Western',
            value: 337071,
            color: '#d0e5f9',
          },
          {
            id: 'Ba',
            name: 'Ba',
            value: 247708,
            parent: 'Western',
          },
          {
            id: 'Nadroga-Navosa',
            name: 'Nadroga-Navosa',
            value: 58931,
            parent: 'Western',
          },
          {
            id: 'Ra',
            name: 'Ra',
            value: 30432,
            parent: 'Western',
          },
          {
            id: 'Northern',
            name: 'Northern',
            value: 131918,
            color: '#2183e3',
          },
          {
            id: 'Bua',
            name: 'Bua',
            value: 15466,
            parent: 'Northern',
          },
          {
            id: 'Cakaudrove',
            name: 'Cakaudrove',
            value: 50469,
            parent: 'Northern',
          },
          {
            id: 'Macuata',
            name: 'Macuata',
            value: 65983,
            parent: 'Northern',
          },
          {
            id: 'Eastern',
            name: 'Eastern',
            value: 36156,
            color: '#145ca2',
          },
          {
            id: 'Kadavu',
            name: 'Kadavu',
            value: 10897,
            parent: 'Eastern',
          },
          {
            id: 'Lau',
            name: 'Lau',
            value: 9602,
            parent: 'Eastern',
          },
          {
            id: 'Lomaiviti',
            name: 'Lomaiviti',
            value: 15657,
            parent: 'Eastern',
          },
          {
            id: 'Rotuma',
            name: 'Rotuma',
            value: 1594,
            color: '#092a4b',
          },
        ],
      },
    ],
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
}
