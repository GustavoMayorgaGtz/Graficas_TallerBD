import { AbstractControl, FormGroup } from "@angular/forms";
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartType } from "ng-apexcharts/public_api";

export interface StructDataTransport
{
  type: Number,
  status: Number,
  message: any
}

export type StructData = Omit<StructDataTransport, "type">;

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

export interface Usuario{
    ID_Usuario: number,
    Correo: string,
    Nombre: string,
    Password: string
}

export interface EmitterStruct{
  status: boolean,
  direccion: number
}

export interface LoginForm{
  username: String,
  password: String
}

export interface LoginFormBuild extends FormGroup
{
  value: LoginForm,
  controls:{
      username: AbstractControl,
      password: AbstractControl
  }
}

export interface CreateUser extends LoginForm{
  email: String
}

export interface CreateUserBuild extends FormGroup{
  value: CreateUser,
  controls:{
      username: AbstractControl,
      password: AbstractControl,
      email: AbstractControl
  }
}

export interface CreateUser{
  username: String,
  password1: String,
  password2: String
}

export interface CreateUserForm extends FormGroup
{
  value: CreateUser,
  controls:{
      username: AbstractControl,
      password1: AbstractControl,
      password2: AbstractControl
  }
}

export interface CreateChart {
  userId: number;
  chartType: string;
  title: string;
  dataSet: string;
  chartColor: string;
  description?: string;
}

export interface ChartFormGroup extends FormGroup {
  value: CreateChart;
  controls: {
    userId: AbstractControl<number>;
    chartType: AbstractControl<string>;
    title: AbstractControl<string>;
    dataSet: AbstractControl<string>;
    chartColor: AbstractControl<string>;
    description: AbstractControl<string | undefined>;
  }
}

export interface CreateChartDTO {
  chartType: ChartType,
  title: string;
  description?: string;
}

export type Days = Number[];

export type Charts = ChartOptions[];
