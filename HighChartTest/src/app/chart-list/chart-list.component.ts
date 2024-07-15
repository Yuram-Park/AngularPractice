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
    // 분석 제목
    title: {
      text: '기준연도(금액)',
      align: 'left',
    },
    // 기존 분석 제목
    subtitle: {
      text: '기준연도(금액)',
      align: 'left',
    },
    // 차트 유형
    chart: {
      type: 'line',
    },
    // x축 좌표(변수) / x축 타이틀 / x축 레이블
    xAxis: {
      // x축 좌표(변수) / x축 레이블
      categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
      accessibility: {
        // x축 타이틀
        description: '기준연도(금액)',
      },
    },
    // y축 좌표(변수) / y축 타이틀 / y축 레이블
    yAxis: {
      // y축 좌표(변수) / y축 레이블
      min: 1,
      // y축 타이틀
      title: {
        text: '연구개발비(백만원)',
      },
    },
    // 값 / 값 레이블
    series: [
      {
        type: 'line',
        // 값 레이블
        name: '정부투자연구비(백만원)',
        // 값
        data: [15446, 18721, 30678, 62310, 69840, 114274],
      },
    ],
    tooltip: {
      valueSuffix: '백만원',
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
  };
}
