import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartOptionInputService } from '../analysis-chart/chart-option-input.service';

export interface inputOptions {
    chartType: string,
    xValue: string,
    xValueTop: number,
    yValue: string,
    yLeft: string,
    yLeftValue: string,
    yLeftType: string,
    yRight: string,
    yRightValue: string,
    yRightType: string,
  };

@Component({
  selector: 'analysis-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './analysis-option.component.html',
  styleUrl: './analysis-option.component.css',
})
export class AnalysisOptionComponent {

  // constructor(private chartOptionInput: ChartOptionInputService){}
  // chartData: any = {};

  // ngOnInit(){
  //   let option: any = this.chartOptionInput.setOption['column'](this.chartData);
  //   console.log(option);
  // }


  @Output() goChart = new EventEmitter<inputOptions>();

  chartType: string = '';
  xValue: string = '';
  xValueTop: number = 0;
  yValue: string = '';
  yLeft: string = '';
  yLeftValue: string = '';
  yLeftType: string = '';
  yRight: string = '';
  yRightValue: string = '';
  yRightType: string = '';
  chartOptions: Highcharts.Options = {};


  setChartOption() {
    let options:inputOptions = {
      chartType : this.chartType,
      xValue: this.xValue,
      xValueTop: this.xValueTop,
      yValue: this.yValue,
      yLeft: this.yLeft,
      yLeftValue: this.yLeftValue,
      yLeftType: this.yLeftType,
      yRight: this.yRight,
      yRightValue: this.yRightValue,
      yRightType: this.yRightType
    };
    this.goChart.emit(options);
    console.log(this.yLeft === '');
  }


}
