import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChartFormGroup, CreateChartDTO } from 'src/app/Interfaces';
import { ChartOptions } from 'src/app/Interfaces';
import { ChartType } from 'ng-apexcharts';
import { ChartService } from 'src/app/Servicios/Chart/chart.service';

@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.css']
})
export class CreateChartComponent implements OnInit {

  public chart: ChartOptions;
  public createChartForm: ChartFormGroup;

  public isReturn: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private chartService: ChartService,
  ) {
    this.createChartForm = this.formBuilder.group({
      userId: new FormControl('', Validators.required),
      chartType: new FormControl('bar', Validators.required),
      title: new FormControl('Aquí va el nombre', Validators.required),
      dataSet: new FormControl('', Validators.required),
      chartColor: new FormControl('blue', Validators.required),
      description: new FormControl('', Validators.required),
    })as unknown as ChartFormGroup;

    this.chart = {
      chart: {
        type: this.createChartForm.controls.chartType.value as ChartType,
        height: 300,
        width: 350,
      },
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 68 + 1, 91, 148]
        }
      ],
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      title: {
        text: this.createChartForm.controls.title.value,
      },
    }

  }

  ngOnInit(): void {

  }

  public returnPage(e: MouseEvent): void {
    e.preventDefault();
    this.isReturn = !this.isReturn;
    //this.router.navigateByUrl('/dashboard');
    return;
  }

  public setTitle(e: Event): void {
    console.log("Input")
    e.preventDefault();
    this.chart.title = {
      ...this.chart.title,
      text: this.createChartForm.controls.title.value
    };
    console.log(this.chart.title.text);
  }

  public setChartType(e: Event): void {
    e.preventDefault();
    this.chart.chart = { ...this.chart.chart, type: this.createChartForm.controls.chartType.value as ChartType }
  }

  public submitForm(e: SubmitEvent): void {
    e.preventDefault();
    console.log(this.createChartForm.controls);
    const chartData: CreateChartDTO = {
      chartType: this.createChartForm.value.chartType as ChartType,
      title: this.createChartForm.value.title,
      description: this.createChartForm.value.description
    }
    this.chartService.createChart(chartData).subscribe((response) => {
      if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
      return this.router.navigateByUrl('/dashboard');
    })
  }

}
