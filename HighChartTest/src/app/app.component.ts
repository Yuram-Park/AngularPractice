import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartList2Component } from './chart-list2/chart-list2.component';
import { ChartList3Component } from './chart-list3/chart-list3.component';
import { ChartList4Component } from './chart-list4/chart-list4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChartListComponent,
    ChartList2Component,
    ChartList3Component,
    ChartList4Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HighChartTest';
}
