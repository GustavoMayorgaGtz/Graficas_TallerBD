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
export interface Login{
    status: number,
    logged: boolean,
    id: number
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
  chartType: string;
  title: string;
  dataSet: string;
  description?: string;
}

export interface ChartFormGroup extends FormGroup {
  value: CreateChart;
  controls: {
    chartType: AbstractControl<string>;
    title: AbstractControl<string>;
    dataSet: AbstractControl<string>;
    description: AbstractControl<string | undefined>;
  }
}

export interface CreateChartDTO {
  ID_Usuario: string
  chartType: ChartType,
  dataSet:string;
  title: string;
  description?: string;
}


export type Charts = ChartOptions[];
export interface ApiForm {
    ConjuntNameApi: String
}
export interface connectionBDForm{
    ConjuntName: String
    Authentication: String
    ServerName: String
    SQLQuery: String
}

export interface ApiFormGroup extends FormGroup{
    values: ApiForm,
    controls:{
        ConjuntNameApi: AbstractControl<String>
    }
}

export interface connectionBDFormGroup extends FormGroup{
    values: connectionBDForm,
    controls:{
        ConjuntName: AbstractControl<String>,
        Authentication: AbstractControl<String>,
        ServerName: AbstractControl<String>,
        SQLQuery: AbstractControl<String>
    }
}

export type Days = Number[];
