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

  // treemap
  treemapValue: any[];
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

      // treemap
      treemapValue: respData.treemapValue,
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
        // 분석 제목
        title: {
          text: chartData.titleText,
          align: 'left',
        },
        // 기존 분석 제목
        subtitle: {
          text: chartData.titleText,
          align: 'left',
        },
        xAxis: {
          // x축 좌표(변수) / x축 레이블
          categories: chartData.xData,
          accessibility: {
            // x축 타이틀
            description: chartData.titleText,
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

      let dataset: any[] = [];
      for (let i = 0; i < chartData.value1Data.length; i++) {
        dataset.push({
          // x축 좌표(변수)
          name: chartData.xData[i],
          // 값
          y: chartData.value1Data[i],
        });
      }

      let options = {
        // 분석 제목
        title: {
          text: chartData.titleText,
        },
        // 기존 분석 제목? = x축 타이틀?
        subtitle: {
          text: chartData.titleText,
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
            type: chartData.value1Type,
            innerSize: '50%',
            // 계열명?
            name: chartData.value1,
            // 값 레이블 = x축 레이블
            dataLabels: [
              {
                enabled: true,
                format: '{point.name} {point.y} %', // 설정필요//
              },
            ],
            data: dataset,
          },
        ],
        // tooltip?(계열명+x축좌표+값+valueSuffix)
        tooltip: {
          valueSuffix: '%',
        },
      };

      return options;
    },
    // 차트 유형: 트리맵(타일) 차트
    treemap: (chartData) => {

      let dataset: any[] = [];
      for(let i=0; i<chartData.treemapValue.length; i++){
        if(chartData.treemapValue[i].parent === null || chartData.treemapValue[i].parent === undefined){
          dataset.push({
            id: chartData.treemapValue[i].name,
            // x축 좌표(변수) = x축 레이블?
            name: chartData.treemapValue[i].name,
            // 값
            value: chartData.treemapValue[i].value,
          });
        } else{
          dataset.push(chartData.treemapValue[i]);
        }

      }

      let options = {
        // 분석 제목
        title: {
          text: chartData.titleText,
        },
        // 기존 분석 제목?
        subtitle: {
          text: chartData.titleText,
        },
        series: [
          {
            // x축 타이틀?(대분류)
            name: chartData.value1Name,
            // 차트 유형
            type: chartData.value1Type,
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
            data: dataset,
          },
        ],
        // tooltip?(x축좌표+값+valueSuffix)
        tooltip: {
          valueSuffix: '백만원',
        },
      };

      return options;
    },
  };
}
