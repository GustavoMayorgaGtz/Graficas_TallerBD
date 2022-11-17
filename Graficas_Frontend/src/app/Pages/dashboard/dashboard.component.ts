import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts/public_api';
import { ChartOptions } from 'src/app/Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('chart') public chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor(
    private router: Router
  ) {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

  handleOnConfig(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigateByUrl("/administrador");
  }

}
