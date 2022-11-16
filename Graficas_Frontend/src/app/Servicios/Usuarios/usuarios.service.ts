import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StructData } from '../../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  FindAllUsers()
  {
     return this.http.get<StructData>(environment.server+"/User/FindAllUsers");
  }

  DropUser(body: Object)
  {
    return this.http.post(environment.server+"/User/DeleteUser", body);
  }

  CreateUsuario(body: Object)
  {
    return this.http.post<StructData>(environment.server+"/User/CreateUser", body);
  }
}
