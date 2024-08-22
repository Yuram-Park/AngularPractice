import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { chart, format } from 'highcharts';

export interface data {
  xFieldName: string;
  xFieldData: any[] | null | undefined;
  yFieldName: string | null | undefined; // 버블차트 - 분석 집계 변수 2
  yValue1Name: string;
  yValue1Analysis: string;
  yValue1Type: string;
  yValue1Data: any[] | null | undefined;
  yValue2Name: string | null | undefined; // 막대/선차트 - 분석값2
  yValue2Analysis: string | null | undefined; // 막대/선차트 - 분석값2
  yValue2Type: string | null | undefined; // 막대/선차트 - 분석값2
  yValue2Data: any[] | null | undefined; // 막대/선차트 - 분석값2
  pieData: any[] | null | undefined; // 원형차트 - 데이터set
  treemapData: any[] | null | undefined; // 트리맵차트 - 데이터set
  zValueName: string | null | undefined; // 버블차트 - z값
  zValueAnalysis: string | null | undefined; // 버블차트 - z값
  bubbleData: any[] | null | undefined; // 버블차트 - 데이터set
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
      xFieldName: userOption.xFieldName,
      xFieldData: respData.xFieldData,
      yFieldName: userOption.yFieldName,
      yValue1Name: userOption.yValue1Name,
      yValue1Analysis: userOption.yValue1Analysis,
      yValue1Type: userOption.yValue1Type,
      yValue1Data: respData.yValue1Data,
      yValue2Name: userOption.yValue2Name,
      yValue2Analysis: userOption.yValue2Analysis,
      yValue2Type: userOption.yValue2Type,
      yValue2Data: respData.yValue2Data,
      pieData: respData.pieData,
      treemapData: respData.treemapData,
      zValueName: userOption.zValueName,
      zValueAnalysis: userOption.zValueAnalysis,
      bubbleData: respData.bubbleData,
    };

    return chartData;
  }

  // chartOption형식으로 input형태 만들어주기
  // chart type에 따라 분류해보기
  setOption: { [chartType: string]: (chartData: any) => Object } = {
    // 차트 유형: 막대 or 선 차트
    CL1: (chartData) => {
      return {
        title: {
          // 분석 제목
          text: chartData.xFieldName,
          align: 'left',
        },
        subtitle: {
          // 분석 소제목?
          text: chartData.xFieldName,
          align: 'left',
        },
        xAxis: {
          // x축 좌표(변수), x축 레이블 - 배열타입
          categories: chartData.xFieldData,
          title: {
            // x축 타이틀
            text: chartData.xFieldName,
          },
        },
        yAxis: [
          {
            // y축 최소값
            min: 1,
            title: {
              // y축 타이틀
              text: chartData.yValue1Name,
            },
          },
        ],
        series: [
          {
            // 계열명?
            name: chartData.yValue1Name,
            // 차트 유형
            type: chartData.yValue1Type,
            yAxis: 0,
            // y축 좌표(변수), 값
            data: chartData.yValue1Data,
            dataLabels: [
              {
                align: 'center',
                // 값 레이블 여부
                enabled: true,
              },
            ],
            // tooltip?(계열명 + x축 좌표(변수) + 값 + valueSuffix)
            tooltip: {
              valueSuffix: '넣어야해!!!',
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
    // 차트유형: 수직 막대 차트
    CL2: (chartData) => {
      return {
        title: {
          // 분석 제목
          text: chartData.xFieldName,
          align: 'center',
        },
        subtitle: {
          // 분석 소제목?
          text: chartData.xFieldName,
          align: 'center',
        },
        xAxis: {
          // x축 좌표(변수), x축 레이블 - 배열타입
          categories: chartData.xFieldData,
          title: {
            // x축 타이틀
            text: chartData.xFieldName,
          },
        },
        yAxis: [
          {
            // y축 #1
            // y축 최솟값?
            //min: 1,
            title: {
              // y축 타이틀 #1
              text: chartData.yValue1Name,
            },
          },
          {
            // y축 #2
            // y축 최솟값?
            //min: 1,
            title: {
              // y축 타이틀 #2
              text: chartData.yValue2Name,
            },
            opposite: true, // y축 위치
          },
        ],
        series: [
          {
            // y축 #1
            // y축 계열명
            name: chartData.yValue1Name,
            // 차트 유형
            type: chartData.yValue1Type,
            yAxis: 0, // 위 yAxis의 첫번째 값
            // y축 좌표(변수), 값 #1
            data: chartData.yValue1Data,
            dataLabels: [
              {
                align: 'center',
                // 값 레이블 여부
                enabled: true,
              },
            ],
            tooltip: {
              // tooltip
              valueSuffix: '넣어야해!!!',
            },
          },
          {
            // y축 #2
            // y축 계열명
            name: chartData.yValue2Name,
            // 차트 유형
            type: chartData.yValue2Type,
            yAxis: 1, // 위 yAxis의 첫번째 값
            // y축 좌표(변수), 값 #2
            data: chartData.yValue2Data,
            dataLabels: [
              {
                align: 'center',
                // 값 레이블 여부
                enabled: true,
              },
            ],
            tooltip: {
              // tooltip
              valueSuffix: '넣어야해!!!',
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
      for (let i = 0; i < chartData.pieData.length; i++) {
        dataset.push(chartData.pieData[i]);
      }

      let options = {
        title: {
          // 분석 제목
          text: chartData.xFieldName,
        },
        subtitle: {
          // 분석 소제목? x축 타이틀???
          text: chartData.xFieldName,
          verticalAlign: 'middle',
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
            name: chartData.yValue1Name,
            dataLabels: [
              {
                // 값 레이블 여부
                enabled: true,
                // 값 레이블 포맷
                format: '{point.name} {point.y} %', // 넣어야해
              },
            ],
            data: dataset,
          },
        ],
        // tooltip?(계열명+x축좌표+값+valueSuffix)
        tooltip: {
          valueSuffix: '넣어야해',
        },
      };
      return options;
    },
    // 차트 유형: 트리맵(타일) 차트
    treemap: (chartData) => {
      let dataset: any[] = [];
      for (let i = 0; i < chartData.treemapData.length; i++) {
        if (
          chartData.treemapData[i].parent === null ||
          chartData.treemapData[i].parent === undefined
        ) {
          dataset.push({
            id: chartData.treemapData[i].name,
            // x축 좌표(변수), x축 레이블?
            name: chartData.treemapData[i].name,
            // y축 좌표(변수), 값
            value: chartData.treemapData[i].value,
          });
        } else {
          dataset.push(chartData.treemapData[i]);
        }
      }

      let options = {
        title: {
          // 분석 제목
          text: chartData.xFieldName,
        },
        subtitle: {
          // 분석 소제목
          text: chartData.xFieldName,
        },
        series: [
          {
            // x축 타이틀?(대분류)
            name: chartData.yValue1Name,
            // 차트 유형
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowTraversingTree: true, // drilldown여부
            animationLimit: 1000,
            dataLabels: {
              // 값 레이블 여부
              enabled: true,
              // 값 레이블 포맷? 값? x축?
              format: '▶{point.name}', // 넣어야해
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
          valueSuffix: '백만원', // 넣어야해
        },
      };

      return options;
    },
    // 차트 유형: 버블(스캐터 플롯) 차트
    bubble: (chartData) => {
      let dataset: any[] = [];
      for (let i = 0; i < chartData.bubbleData.length; i++) {
        dataset.push(chartData.bubbleData[i]);
      }

      let options = {
        title: {
          // 분석 제목
          text: chartData.xFieldName,
        },
        subtitle: {
          // 분석 소제목
          text: chartData.xFieldName,
        },
        xAxis: {
          title: {
            // x축 타이틀
            text: chartData.xFieldName,
          },
        },
        yAxis: {
          title: {
            // y축 타이틀
            text: chartData.yFieldName,
          },
        },
        series: [
          {
            // 차트 유형
            type: 'bubble',
            // 계열명
            name: 'hi',
            plotBorderWidth: 1,
            zooming: {
              type: 'xy',
            },
            data: dataset,
          },
        ],
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: '{point.name}', // 넣어야해
            },
          },
        },
      };
      return options;
    },
  };
}
