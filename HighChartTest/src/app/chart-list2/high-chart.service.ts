import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class HighChartService {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {}

  chartOptions: Highcharts.Options = {
    // 분석 제목
    title: {
      text: '연구수행주체',
    },
    // 기존 분석 제목
    subtitle: {
      text: '연구수행주체',
    },
    // 차트 유형
    chart: {
      type: 'pie',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels:
          {
            enabled: true,
          },
        showInLegend: true
      },
    },
    series: [
      {
        type: 'pie',
        // 값 레이블
        name: '정부투자연구비(백만원)',
        data: [
          {
            // x축 좌표(변수) / x축 레이블
            name: '출연연구소',
            // 값
            y: 48.18,
          },
          {
            name: '대학',
            sliced: true,
            selected: true,
            y: 45.07,
          },
          {
            name: '대기업',
            y: 2.88,
          },
          {
            name: '중소기업',
            y: 2.81,
          },
          {
            name: '기타',
            y: 1.06,
          },
        ],
      },
    ],
    legend: {
      accessibility: {
        enabled: true
      }
    },
    tooltip: {
      valueSuffix: '%',
    },
  };
}
