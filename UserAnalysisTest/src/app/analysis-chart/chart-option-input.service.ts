import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartOptionInputService {
  // BE에 요청하여 받은 응답을 chart input 값으로 재가공해서 전달하기

  constructor() {}

  // UI에서 받은 option
  chartType: string = 'column'; // 차트유형: column, line, pie, treemap, scatter 가능
  field1: string = '과제수행기관명'; // 분석 변수 1
  value1: string = '연구개발비(백만원)'; // 분석 값 1
  value1Analysis: string = '합계'; // 분석 값 1의 분석방법: 개수, 합계, 평균 가능
  value1Type: string = 'column'; // 분석 값 1의 차트 유형: column, line 가능
  value2: string = '논문 개수(건)'; // 분석 값 2
  value2Analysis: string = '개수'; // 분석 값 2의 분석방법: 개수, 합계, 평균 가능
  value2Type: string = 'line'; // 분석 값 2의 차트 유형: column, line 가능

  // BE에서 받은 값 = 데이터
  field1Data: string[] = ['한국과학기술원', '한국전자통신연구원', '서울대학교', '부산대학', '한국과학기술연구원'];
  value1Data: number[] = [15446, 18721, 30678, 62310, 114274];
  value2Data: number[] = [164, 158, 143, 97, 65];

  // chartOption에 넣을 형태로 변환하기



  // chartOption형식으로 input형태 만들어주기
  setOption(chartType: string){
    return {
      // 분석 제목
      title: {
        text: this.field1,
        align: 'left',
      },
      // 기존 분석 제목
      subtitle: {
        text: this.field1,
        align: 'left',
      },
      xAxis: {
        // x축 좌표(변수) / x축 레이블
        categories: this.field1Data,
        accessibility: {
          // x축 타이틀
          description: this.field1,
        },
      },
      yAxis: [
        {
          // y축 좌표(변수) / y축 레이블
          min: 1,
          // y축 타이틀
          title: {
            text: this.value1,
          },
        },
      ],
      series: [
        {
          // y축 #1
          // 계열명?
          name: this.value1,
          // 차트 유형
          type: this.value1Type,
          yAxis: 0,
          // 값
          data: this.value1Data,
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
  }

}
