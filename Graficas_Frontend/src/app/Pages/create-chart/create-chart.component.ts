import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChartFormGroup } from 'src/app/Interfaces';
import { ChartOptions } from 'src/app/Interfaces';

@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.css']
})
export class CreateChartComponent implements OnInit {

  public chart: ChartOptions;
  public createChartForm: ChartFormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createChartForm = this.formBuilder.group({
      userId: new FormControl('', Validators.required),
      chartType: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      dataSet: new FormControl('', Validators.required),
      chartColor: new FormControl('blue', Validators.required),
      description: new FormControl('', Validators.required),
    })as unknown as ChartFormGroup;

    this.chart = {
      chart: {
        type: 'bar',
        height: 300,
      },
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      title: {
        text: 'Gráfia de ejemplo'
      }
    }

  }

  ngOnInit(): void {

  }

  public returnPage(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigateByUrl('/dashboard');
    return;
  }

}
