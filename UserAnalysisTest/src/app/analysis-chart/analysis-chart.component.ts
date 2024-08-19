import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { AnalysisOptionComponent, inputOptions } from '../analysis-option/analysis-option.component';
import { ChartOptionInputService } from '../analysis-chart/chart-option-input.service';
import TreemapModule from 'highcharts/modules/treemap';

TreemapModule(Highcharts);

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

  // UI에서 받은 사용자 option
  userOption: any = {
    chartType: 'treemap', // 차트유형: column, line, pie, treemap, scatter 가능
    field1: '과제수행기관명', // 분석 변수 1
    value1: '연구개발비(백만원)', // 분석 값 1
    value1Analysis: '합계', // 분석 값 1의 분석방법: 개수, 합계, 평균 가능
    value1Type: 'treemap', // 분석 값 1의 차트 유형: column, line 가능
    value2: '논문 개수(건)', // 분석 값 2
    value2Analysis: '개수', // 분석 값 2의 분석방법: 개수, 합계, 평균 가능
    value2Type: 'line', // 분석 값 2의 차트 유형: column, line 가능
  };

  // BE에서 받은 값 = 데이터
  // treemap처럼 set으로 받는게 나으려나..??
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

    // pie chart
    // dataformat

    // treemap
    // data -> parent 추가해야함
    treemapValue: [
      { name: '물리학', value: 198725, parent: null },
      { name: '정보/통신', value: 56233, parent: null },
      { name: '수학', value: 31186, parent: null },
      { name: '원자/분자물리', value: 113637, parent: '물리학' },
      { name: '광학', value: 43985, parent: '물리학' },
      { name: '응집 물질 물리', value: 4022, parent: '물리학' },
      { name: '정보 이론', value: 56533, parent: '정보/통신' },
      { name: '기타정보/통신', value: 3022, parent: '정보/통신' },
      { name: '정보보호', value: 401, parent: '정보/통신' },
    ],
  };

  ngOnInit() {
    let option: any = this.chartOptionInput.setOption[
      this.userOption.chartType
    ](this.chartOptionInput.processData(this.userOption, this.respData));
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
