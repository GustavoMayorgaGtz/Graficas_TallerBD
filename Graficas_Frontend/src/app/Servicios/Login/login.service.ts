import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { StructData} from 'src/app/Interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  Login(body: Object)
  {
    return this.http.post<StructData>(environment.server+"/User/Login", body);
  }
}
