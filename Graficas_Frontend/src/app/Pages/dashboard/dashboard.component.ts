import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts/public_api';
import { ChartOptions, Charts } from 'src/app/Interfaces';
import { Router } from '@angular/router';
import { ChartService } from 'src/app/Servicios/Chart/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') public chart!: ChartComponent;

  public chartOptions: ChartOptions;
  public availableCharts: Charts;

  constructor(
    private router: Router,
    private chartService: ChartService,
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

  ngOnInit(): void {
    this.chartService.getCharts().subscribe((response) => {
      if (response.length === 0) return console.warn("No data available");
      this.availableCharts = response;
    });
  }

  handleOnConfig(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigateByUrl("/administrador");
  }

  handleOnChartClick(e: MouseEvent, idx: number): void {

  }

}
