import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalysisChartComponent } from "./analysis-chart/analysis-chart.component";
import { AnalysisOptionComponent } from "./analysis-option/analysis-option.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnalysisChartComponent, AnalysisOptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserAnalysisTest';
}
