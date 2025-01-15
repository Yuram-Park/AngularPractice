import { Component } from '@angular/core';
import { AnalysisChartComponent } from '../analysis-chart/analysis-chart.component';
import { AnalysisOptionComponent } from '../analysis-option/analysis-option.component';

  // UI에서 받은 사용자 option
export interface userOption {
  // 차트 유형
  chartType: string; // CL1(막대or선), CL2(막대&선), pie, treemap, scatter 가능
  xFieldName: string; // 분석 집계 변수 1
  xFieldNameCode: string; // BE 데이터를 받아오기 위한 코드

  // 막대/선차트, 원형차트, 트리맵 차트
  yValue1Name: string | null | undefined; // 분석값 1
  yValue1NameCode: string | null | undefined; // BE 데이터를 받아오기 위한 코드
  yValue1Analysis: string | null | undefined; // 값 계산: 개수(count), 합계(sum), 평균(avg)
  yValue1Type: string | null | undefined; // 값 표현: 막대(column), 선(line)

  yValue2Name: string | null | undefined; // 분석값 2
  yValue2NameCode: string | null | undefined; // BE 데이터를 받아오기 위한 코드
  yValue2Analysis: string | null | undefined; // 값 계산
  yValue2Type: string | null | undefined; // 값 표현

  // 버블 차트
  yFieldName: string | null | undefined; // 분석 집계 변수 2
  yFieldNameCode: string | null | undefined; // BE 데이터를 받아오기 위한 코드
  zValueName: string | null | undefined; // z 값
  zValueNameCode: string | null | undefined; // BE 데이터를 받아오기 위한 코드
  zValueAnalysis: string | null | undefined; // z 값 계산
}

@Component({
  selector: 'analysis-page',
  standalone: true,
  imports: [AnalysisOptionComponent, AnalysisChartComponent],
  templateUrl: './analysis-page.component.html',
  styleUrl: './analysis-page.component.css',
})
export class AnalysisPageComponent {

  // UI에서 받은 사용자 option
  userOption: userOption = {
    // 차트 유형
    chartType: 'CL', // CL(막대/선), P(파이), T(트리맵), M(매트릭스), B(버블) 가능
    xFieldName: '과제수행기관명', // 분석 집계 변수 1
    xFieldNameCode: 'bns_name', // BE로 보내기 위한 코드

    // 막대/선차트, 원형차트, 트리맵 차트
    yValue1Name: '과제 현황(건)', // 분석값 1
    yValue1NameCode: 'tasknm', // BE로 보내기 위한 코드
    yValue1Analysis: 'count', // 값 계산: 개수(count), 합계(sum), 평균(avg)
    yValue1Type: 'column', // 값 표현: 막대(column), 선(line)

    yValue2Name: '논문 성과(건)', // 분석값 2
    yValue2NameCode: 'journal', // BE로 보내기 위한 코드
    yValue2Analysis: 'count', // 값 계산: 개수(count), 합계(sum), 평균(avg)
    yValue2Type: 'column', // 값 표현

    // 버블 차트
    yFieldName: '기술분류', // 분석 집계 변수 2
    yFieldNameCode: 'tech_sort', // BE로 보내기 위한 코드
    zValueName: '연구개발비(백만원)', // z 값
    zValueNameCode: '_amount', // BE로 보내기 위한 코드
    zValueAnalysis: 'sum', // z 값 계산
  };

  // // UI에서 받은 사용자 option
  // // 차트 유형
  // chartType: string = 'CL'; // CL(막대/선), pie, treemap, bubble 가능
  // xFieldName: string = '과제수행기관명'; // 분석 집계 변수 1
  // xFieldNameCode: string = 'bns_name'; // BE로 보내기 위한 코드

  // // 막대/선차트, 원형차트, 트리맵 차트
  // yValue1Name: string = '과제 현황(건)'; // 분석값 1
  // yValue1NameCode: string = 'tasknm'; // BE로 보내기 위한 코드
  // yValue1Analysis: string = 'count'; // 값 계산: 개수(count), 합계(sum), 평균(avg)
  // yValue1Type: string = 'column'; // 값 표현: 막대(column), 선(line)

  // yValue2Name: string = ''; // 분석값 2
  // yValue2NameCode: string = 'journal'; // BE로 보내기 위한 코드
  // yValue2Analysis: string = 'count'; // 값 계산: 개수(count), 합계(sum), 평균(avg)
  // yValue2Type: string = 'line'; // 값 표현

  // // 버블 차트
  // yFieldName: string = '기술분류'; // 분석 집계 변수 2
  // yFieldNameCode: string = 'tech_sort'; // BE로 보내기 위한 코드
  // zValueName: string = '연구개발비(백만원)'; // z 값
  // zValueNameCode: string = '_amount'; // BE로 보내기 위한 코드
  // zValueAnalysis: string = 'sum'; // z 값 계산
}
