import { Component } from '@angular/core';
import Highcharts from 'highcharts';
// import Dashboards from '@highcharts/dashboards';
// import DataGrid from '@highcharts/dashboards/datagrid';

// Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
// Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);
// Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
// Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

@Component({
  selector: 'chart-list4',
  standalone: true,
  imports: [],
  templateUrl: './chart-list4.component.html',
  styleUrl: './chart-list4.component.css',
})
export class ChartList4Component {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

  };
}
