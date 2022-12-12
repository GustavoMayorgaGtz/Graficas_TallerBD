import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/constants';
import { ChartOptions, Charts, CreateChartDTO, StructData } from 'src/app/Interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly url = environment.server+"/Graph/createGraph"

  constructor(private http: HttpClient) { }

  getCharts(data:Object){
    return this.http.post<Charts>(environment.server+"/Graph/getGraphsUser", data)
  }

  public createChart(data: CreateChartDTO){
    return this.http.post<StructData>(this.url, data);
  }
}
