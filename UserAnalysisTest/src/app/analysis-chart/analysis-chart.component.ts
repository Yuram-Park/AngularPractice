import { Component, Input, SimpleChange } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { AnalysisOptionComponent, inputOptions } from '../analysis-option/analysis-option.component';
import { ChartOptionInputService } from '../analysis-chart/chart-option-input.service';

import TreemapModule from 'highcharts/modules/treemap';
import HC_exporting from 'highcharts/highcharts-more';

TreemapModule(Highcharts);
HC_exporting(Highcharts);

Highcharts.setOptions({
  lang: {
    thousandsSep: ",",
  }
})

export interface respData {
  xFieldData: any[] | null | undefined;
  yValue1Data: any[] | null | undefined;
  yValue2Data: any[] | null | undefined;
  pieData: any[] | null | undefined;
  treemapData: any[] | null | undefined;
  yFieldData: any[] | null | undefined;
  matrixData: any[] | null | undefined;
  bubbleData: any[] | null | undefined;
}

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

  @Input() userOption: any;

  // BE 데이터 전송 메서드 return: respData
  setData(userOption: any) {
    // chartType에 따라 nameCode와 analysis(계산 방식)를 이용해서 데이터를 받아오고 respData에 저장
  }

  // tooltip 반영
  setTooltip(valueName: string) {
    let price =
      '정부투자연구비(백만원), 당해년도 매출액(백만원), 당해년도 기술료(백만원)';
    let count =
      '과제(건), 논문성과(건), 특허성과(건), 기술료성과(건), 사업화성과(건), 연수(건)';
    let people = '학위자(명)';
    if (price.includes(valueName)) {
      return '백만원';
    } else if (count.includes(valueName)) {
      return '건';
    } else if (people.includes(valueName)) {
      return '명';
    } else {
      return '';
    }
  }

  // BE에서 받은 값 = 데이터
  // 원본
  respData: respData = {
    // 막대/선차트
    // 분석 집계 변수 데이터
    xFieldData: [
      '한국과학기술원',
      '한국전자통신연구원',
      '서울대학교',
      '부산대학',
      '한국과학기술연구원',
    ],
    // 분석값1 데이터
    yValue1Data: [15446, 18721, 30678, 62310, 114274],
    // 분석값2 데이터
    yValue2Data: [155, 250, 169, 300, 352],

    // 원형 차트
    pieData: [
      {
        // x축 좌표(변수), x축 레이블 - 쌍 타입
        name: '한국과학기술원',
        // y축 좌표(변수), 값
        y: 164,
      },
      { name: '한국전자통신연구원', y: 158 },
      { name: '서울대학교', y: 143 },
      { name: '부산대학', y: 97 },
      { name: '한국과학기술연구원', y: 95 },
    ],

    // 트리맵 차트
    treemapData: [
      {
        // x축 좌표(변수), x축 레이블?
        name: '물리학',
        // y축 좌표(변수), 값
        value: 198725,
        parent: null,
      },
      { name: '정보/통신', value: 56233, parent: null },
      { name: '수학', value: 31186, parent: null },
      { name: '원자/분자물리', value: 113637, parent: '물리학' },
      { name: '광학', value: 43985, parent: '물리학' },
      { name: '응집 물질 물리', value: 4022, parent: '물리학' },
      { name: '정보 이론', value: 56533, parent: '정보/통신' },
      { name: '기타정보/통신', value: 3022, parent: '정보/통신' },
      { name: '정보보호', value: 401, parent: '정보/통신' },
    ],

    // 매트릭스 차트
    yFieldData: ['물리학', '수학', '정보/통신', '전기/전자', '기계'],
    matrixData: [

    ],

    // 버블 차트
    bubbleData: [
      {
        // x축 좌표(변수)
        // y축 좌표(변수)
        y: 70,
        // z축 좌표(변수), 값
        z: 50,
        // z축 좌표(변수)?? z축 레이블??
        name: 'A',
      },
      { y: 100, z: 70, name: 'B' },
      { y: 50, z: 30, name: 'C' },
      { y: 63, z: 80, name: 'D' },
    ],
  };

  // 매핑 값에 따른 데이터 가공
  dataMapping(respData: respData, mappingValue: any) {
    if (this.userOption.chartType === 'CL') {
      respData.xFieldData;
    }
  }

  ngOnInit() {
    let option: any = this.chartOptionInput.setOption[
      this.userOption.chartType
    ](this.chartOptionInput.processData(this.userOption, this.respData));
    this.chartOptions = option;
    console.log(option)
  }

  ngOnChanges(changes: SimpleChange) {}
}
