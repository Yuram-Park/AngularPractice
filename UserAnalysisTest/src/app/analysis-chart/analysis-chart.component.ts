import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { AnalysisOptionComponent, inputOptions } from '../analysis-option/analysis-option.component';

@Component({
  selector: 'analysis-chart',
  standalone: true,
  imports: [HighchartsChartModule, FormsModule, AnalysisOptionComponent],
  templateUrl: './analysis-chart.component.html',
  styleUrl: './analysis-chart.component.css',
})
export class AnalysisChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  updateFlag: boolean = false;

  // chartOptions: Highcharts.Options = {
  //     // 분석 제목
  //     title: {
  //       text: '기준연도(금액)',
  //       align: 'left',
  //     },
  //     // 기존 분석 제목
  //     subtitle: {
  //       text: '기준연도(금액)',
  //       align: 'left',
  //     },
  //     xAxis: {
  //       // x축 좌표(변수) / x축 레이블
  //       categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
  //       accessibility: {
  //         // x축 타이틀
  //         description: '기준연도(금액)',
  //       },
  //     },
  //     yAxis: [
  //       {
  //         // y축 좌표(변수) / y축 레이블
  //         min: 1,
  //         // y축 타이틀
  //         title: {
  //           text: '연구개발비(백만원)',
  //         },
  //       },
  //       {
  //         min: 0,
  //         title: {
  //           text: '과제건수(건)',
  //         },
  //         opposite: true,
  //       },
  //     ],
  //     series: [
  //       {
  //         // y축 #1
  //         // 계열명?
  //         name: '정부투자연구비(백만원)',
  //         // 차트 유형
  //         type: 'column',
  //         yAxis: 0,
  //         // 값
  //         data: [15446, 18721, 30678, 62310, 69840, 114274],
  //         // 값 레이블
  //         dataLabels: [
  //           {
  //             align: 'center',
  //             enabled: true,
  //           },
  //         ],
  //         // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
  //         tooltip: {
  //           valueSuffix: ' 백만원',
  //         },
  //       },
  //       {
  //         // y축 #2
  //         // 계열명?
  //         name: '과제 건수(건)',
  //         // 차트 유형
  //         type: 'line',
  //         yAxis: 1,
  //         // 값
  //         data: [150, 70, 209, 250, 315, 114],
  //         // 값 레이블
  //         dataLabels: [
  //           {
  //             align: 'center',
  //             enabled: true,
  //           },
  //         ],
  //         // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
  //         tooltip: {
  //           valueSuffix: ' 건',
  //         },
  //       },
  //     ],

  //     plotOptions: {
  //       column: {
  //         pointPadding: 0.2,
  //         borderWidth: 0,
  //       },
  //     },
  //   };

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
      xAxis: {
        // x축 좌표(변수) / x축 레이블
        categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
        accessibility: {
          // x축 타이틀
          description: '기준연도(금액)',
        },
      },
      yAxis: [
        {
          // y축 좌표(변수) / y축 레이블
          min: 1,
          // y축 타이틀
          title: {
            text: '연구개발비(백만원)',
          },
        },
      ],
      series: [
        {
          // y축 #1
          // 계열명?
          name: '정부투자연구비(백만원)',
          // 차트 유형
          type: 'column',
          yAxis: 0,
          // 값
          data: [15446, 18721, 30678, 62310, 69840, 114274],
          // 값 레이블
          dataLabels: [
            {
              align: 'center',
              enabled: true,
            },
          ],
          // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
          tooltip: {
            valueSuffix: ' 백만원',
          },
        },
      ],

      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
    };

  setChartOptions(options: inputOptions) {
    let yAxis2 = {
          min: 0,
          title: {
            text: options.yRight,
          },
          opposite: true,
    };
    let yAxis2Series = {
      // y축 #2
      // 계열명?
      name: options.yRight,
      // 차트 유형
      type: options.yRightType,
      yAxis: 1,
      // 값
      data: [150, 70, 209, 250, 315, 114],
      // 값 레이블
      dataLabels: [
        {
          align: 'center',
          enabled: true,
        },
      ],
      // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
      tooltip: {
        valueSuffix: ' 건',
      },
    };


  }

}
