import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { AnalysisOptionComponent, inputOptions } from '../analysis-option/analysis-option.component';
import { ChartOptionInputService } from '../analysis-chart/chart-option-input.service';

@Component({
  selector: 'analysis-chart',
  standalone: true,
  imports: [HighchartsChartModule, FormsModule, AnalysisOptionComponent],
  templateUrl: './analysis-chart.component.html',
  styleUrl: './analysis-chart.component.css',
})
export class AnalysisChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {};
  updateFlag: boolean = false;

  constructor(private chartOptionInput: ChartOptionInputService) {}

  // UI에서 받은 option
  userOption: any = {
    chartType: 'column', // 차트유형: column, line, pie, treemap, scatter 가능
    field1: '과제수행기관명', // 분석 변수 1
    value1: '연구개발비(백만원)', // 분석 값 1
    value1Analysis: '합계', // 분석 값 1의 분석방법: 개수, 합계, 평균 가능
    value1Type: 'column', // 분석 값 1의 차트 유형: column, line 가능
    value2: '논문 개수(건)', // 분석 값 2
    value2Analysis: '개수', // 분석 값 2의 분석방법: 개수, 합계, 평균 가능
    value2Type: 'line', // 분석 값 2의 차트 유형: column, line 가능
  };

  // BE에서 받은 값 = 데이터
  respData: any = {
    field1Data: [
      '한국과학기술원',
      '한국전자통신연구원',
      '서울대학교',
      '부산대학',
      '한국과학기술연구원',
    ],
    value1Data: [15446, 18721, 30678, 62310, 114274],
    value2Data: [164, 158, 143, 97, 65],
  };

  ngOnInit() {
    console.log(this.userOption.chartType)
    let option: any = this.chartOptionInput.setOption[this.userOption.chartType](this.chartOptionInput.processData(this.userOption, this.respData));
    this.chartOptions = option;
  }



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
