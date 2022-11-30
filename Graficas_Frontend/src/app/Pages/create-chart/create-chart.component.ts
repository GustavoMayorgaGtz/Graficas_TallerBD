import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChartFormGroup, CreateChartDTO } from 'src/app/Interfaces';
import { ChartOptions } from 'src/app/Interfaces';
import { ChartType } from 'ng-apexcharts';
import { ChartService } from 'src/app/Servicios/Chart/chart.service';
import { ConjuntDataService } from 'src/app/Servicios/conjunt-data.service';

@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.css']
})
export class CreateChartComponent implements OnInit, OnDestroy, AfterViewInit {

  public chart: ChartOptions;
  public createChartForm: ChartFormGroup;
  public listConjuntNames: String[] = [];

  public isReturn: boolean = false;
  @ViewChild('dataSet') dateSetVC !: ElementRef<HTMLSelectElement>;
   public dateSet !: HTMLSelectElement;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private chartService: ChartService,
    private conjuntData: ConjuntDataService
  ) {
    this.createChartForm = this.formBuilder.group({
      chartType: new FormControl('bar', Validators.required),
      title: new FormControl('Aquí va el nombre', Validators.required),
      dataSet: new FormControl('', Validators.required),
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
  ngAfterViewInit(): void {
    if(this.dateSetVC.nativeElement)
    {
      this.dateSet = this.dateSetVC.nativeElement;
    }
  }
  ngOnDestroy(): void {
      this.listConjuntNames = []; 
  }

  ngOnInit(): void {
    let id = sessionStorage.getItem("id_user");
    if(id)
    {
      console.log(id)
    this.conjuntData.getConjuntName(id).subscribe((data) => {
      console.log(data)
     interface thisarreglo{
         ConjuntName:String
      }
      let arreglo = data.message as thisarreglo[];
      arreglo.forEach(element => {
         this.listConjuntNames.push(element.ConjuntName)  
        });
      });
  }
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
    let id = sessionStorage.getItem("id_user");
    if(!id){window.location.href = "/"}else
    {
      alert(this.createChartForm.controls.dataSet.value)
    const chartData: CreateChartDTO = {
      ID_Usuario: id,
      chartType: this.createChartForm.value.chartType as ChartType,
      title: this.createChartForm.value.title,
      dataSet: this.dateSet.value,
      description: this.createChartForm.value.description
    }
    this.chartService.createChart(chartData).subscribe((response) => {
      if(response.status == 200 && response.message == "logger")
      this.router.navigateByUrl('/dashboard');
    },(err) =>{
      alert("Error en el servidor");
      this.createChartForm.reset();
    })
  }
  }

}
