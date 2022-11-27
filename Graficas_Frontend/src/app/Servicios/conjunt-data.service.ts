import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StructData } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConjuntDataService {

  constructor(private http : HttpClient) { }

  createConnectionData(body: Object)
  {
    return this.http.post<StructData>(environment.server+"/ConjuntData/createConnectionBD", body);
  }
}
