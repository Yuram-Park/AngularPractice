import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';

TreemapModule(Highcharts);

@Component({
  selector: 'chart-list',
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.css',
})
export class ChartListComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    // 분석 제목
    title: {
      text: '과학기술표준 연구분야 분류1',
    },
    // 기존 분석 제목?
    subtitle: {
      text: '과학기술표준 연구분야 분류1',
    },
    series: [
      {
        // x축 타이틀?(대분류)
        name: '정부투자연구비(백만원)',
        // 차트 유형
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        allowTraversingTree: true,
        animationLimit: 1000,
        dataLabels: {
          enabled: true,
        },
        levels: [
          {
            level: 1,
            borderWidth: 3,
          },
          {
            level: 2,
          },
        ],
        accessibility: {
          exposeAsGroupOnly: true,
        },
        data: [
          {
            // x축 타이틀?
            id: '물리학',
            // x축 좌표(변수) = x축 레이블?
            name: '물리학',
            // 값
            value: 198725,
          },
          {
            id: '정보/통신',
            name: '정보/통신',
            value: 56233,
          },
          {
            id: '수학',
            name: '수학',
            value: 31186,
          },
          {
            name: '원자/분자물리',
            value: 113637,
            // Parent?
            parent: '물리학',
          },
          {
            name: '광학',
            value: 43985,
            parent: '물리학',
          },
          {
            name: '응집 물질 물리',
            value: 4022,
            parent: '물리학',
          },
          {
            name: '정보 이론',
            value: 56533,
            parent: '정보/통신',
          },
          {
            name: '기타정보/통신',
            value: 3022,
            parent: '정보/통신',
          },
          {
            name: '정보보호',
            value: 401,
            parent: '정보/통신',
          },
        ],
      },
    ],
    // tooltip?(x축좌표+값+valueSuffix)
    tooltip: {
      valueSuffix: '백만원',
    },
  };
}
