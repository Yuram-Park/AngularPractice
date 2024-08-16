import { Injectable } from '@angular/core';
import { chart } from 'highcharts';


export interface data {
  chartType: string;
  titleText: string;
  subtitleText: string;
  xData: any[];
  value1Name: string; // name = 계열명
  value1Type: string;
  value1Data: any[];
  value1Tooltip: string;
  value2Name: string | null;
  value2Type: string | null;
  value2Data: any[] | null;
  value2Tooltip: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ChartOptionInputService {
  // BE에 요청하여 받은 응답을 chart input 값으로 재가공해서 전달하기

  constructor() {}

  // chartOption에 넣을 형태로 변환하기

  processData(userOption: any, respData: any) {
    let chartData: data = {
      chartType: userOption.chartType,
      titleText: userOption.field1,
      subtitleText: userOption.field1,
      xData: respData.field1Data,
      value1Name: userOption.value1,
      value1Type: userOption.value1Type,
      value1Data: respData.value1Data,
      value1Tooltip: ' 백만원',
      value2Name: userOption.value2,
      value2Type: userOption.value2Type,
      value2Data: respData.value2Data,
      value2Tooltip: ' 건',
    };

    return chartData;
  }

  // chartOption형식으로 input형태 만들어주기
  // chart type에 따라 분류해보기
  setOption: { [chartType: string]: (chartData: any) => Object } = {
    // 차트유형: 수직 막대 차트
    column: (chartData) => {
      return {
        title: {
          text: chartData.titleText,
          align: 'left',
        },
        subtitle: {
          text: chartData.titleText,
          align: 'left',
        },
        xAxis: {
          categories: chartData.xData,
          accessibility: {
            description: chartData.titleText,
          },
        },
        yAxis: [
          {
            // y축 #1
            min: 1,
            title: {
              text: chartData.value1Name,
            },
          },
          {
            // y축 #2
            min: 1,
            title: {
              text: chartData.value2Name,
            },
            opposite: true,
          },
        ],
        series: [
          {
            // y축 #1
            name: chartData.value1Name,
            type: chartData.value1Type,
            yAxis: 0,
            data: chartData.value1Data,
            dataLabels: [
              {
                align: 'center',
                enabled: true,
              },
            ],
            tooltip: {
              valueSuffix: chartData.value1Tooltip,
            },
          },
          {
            // y축 #2
            name: chartData.value2Name,
            type: chartData.value2Type,
            yAxis: 1,
            data: chartData.value2Data,
            dataLabels: [
              {
                align: 'center',
                enabled: true,
              },
            ],
            tooltip: {
              valueSuffix: chartData.value2Tooltip,
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
    },
    // 차트 유형: 선 차트
    line: (chartData) => {
      return {
        title: {
          text: chartData.titleText,
          align: 'left',
        },
        // 기존 분석 제목
        subtitle: {
          text: '기준연도(금액)',
          align: 'left',
        },
        xAxis: {
          // x축 좌표(변수) / x축 레이블
          categories: chartData.xData,
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
              text: chartData.value1Name,
            },
          },
        ],
        series: [
          {
            // y축 #1
            // 계열명?
            name: chartData.value1Name,
            // 차트 유형
            type: chartData.value1Type,
            yAxis: 0,
            // 값
            data: chartData.value1Data,
            // 값 레이블
            dataLabels: [
              {
                align: 'center',
                enabled: true,
              },
            ],
            // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
            tooltip: {
              valueSuffix: chartData.value1Tooltip,
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
    },
    // 차트 유형: 원형 차트
    pie: (chartData) => {
      return {
        // 분석 제목
        title: {
          text: chartData.titleText,
        },
        // 기존 분석 제목? = x축 타이틀?
        subtitle: {
          text: '연구수행주체',
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
            // 차트 유형
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
    },
    // 차트 유형: 트리맵(타일) 차트
    treemap: (chartData) => {
      return {
        // 분석 제목
        title: {
          text: chartData.titleText,
          align: 'left',
        },
        // 기존 분석 제목
        subtitle: {
          text: '기준연도(금액)',
          align: 'left',
        },
        xAxis: {
          // x축 좌표(변수) / x축 레이블
          categories: chartData.xData,
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
            name: chartData.value1Name,
            // 차트 유형
            type: chartData.value1Type,
            yAxis: 0,
            // 값
            data: chartData.value1Data,
            // 값 레이블
            dataLabels: [
              {
                align: 'center',
                enabled: true,
              },
            ],
            // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
            tooltip: {
              valueSuffix: chartData.value1Tooltip,
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
    },
  };
}
