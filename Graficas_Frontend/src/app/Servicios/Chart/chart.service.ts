import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/constants';
import { ChartOptions, Charts, CreateChartDTO } from 'src/app/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private readonly url = `${SERVER_URL}/charts`

  constructor(private http: HttpClient) { }

  public getCharts(): Observable<Charts> {
    return this.http.get<Charts>(this.url)
  }

  public createChart(data: CreateChartDTO): Observable<HttpResponse<ChartOptions>> {
    return this.http.post<ChartOptions>(this.url, data, { withCredentials: true, observe: 'response' });
  }
}
