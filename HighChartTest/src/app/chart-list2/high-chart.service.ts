import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class HighChartService {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {}
  // pie chart
  chartOptions: Highcharts.Options = {
    // 분석 제목
    title: {
      text: '연구수행주체',
    },
    // 기존 분석 제목 = x축 타이틀?
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
        // 범례 표시
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: '50%',
        // 계열명?
        name: '정부투자연구비(백만원)',
        // 값 레이블 = x축 레이블
        dataLabels: [
          {
            enabled: true,
            format: '{point.name} {point.y} %',
          },
        ],
        data: [
          {
            // x축 좌표(변수)
            name: '출연연구소',
            // 값
            y: 48.18,
          },
          {
            // x축 좌표(변수)
            name: '대학',
            sliced: true,
            selected: true,
            // 값
            y: 45.07,
          },
          {
            // x축 좌표(변수)
            name: '대기업',
            // 값
            y: 2.88,
          },
          {
            // x축 좌표(변수)
            name: '중소기업',
            // 값
            y: 2.81,
          },
          {
            // x축 좌표(변수)
            name: '기타',
            // 값
            y: 1.06,
          },
        ],
      },
    ],
    // tooltip?(계열명+x축좌표+값+valueSuffix)
    tooltip: {
      valueSuffix: '%',
    },
  };
}
