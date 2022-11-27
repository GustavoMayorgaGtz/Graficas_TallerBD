import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiFormGroup, connectionBDFormGroup } from 'src/app/Interfaces';
import { ConjuntDataService } from 'src/app/Servicios/conjunt-data.service';

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.css']
})
export class CreateApiComponent implements OnInit {

  public urlImage: String = "./assets/world.svg";
  public menu: number = 0;
  public token: string = "BC214KDF21D:325DT:EWRTEWTR";
  public generatedURL !: String;

  public connectionBD !: connectionBDFormGroup;
  public api !: ApiFormGroup;

  constructor(private builder: FormBuilder, private conjuntDataService: ConjuntDataService) {

  }

  ngOnInit(): void {
  }

  selectMenu(option: number) {
    this.menu = option;
    switch (this.menu) {
      case 0: {
        this.urlImage = "./assets/world.svg";
        break;
      }
      case 1: {
        this.urlImage = "./assets/server.svg";
        this.connectionBD = this.builder.group({
          ConjuntName: new FormControl('', Validators.required),
          Authentication: new FormControl('', Validators.required),
          SQLQuery: new FormControl('', Validators.required),
          ServerName: new FormControl('', Validators.required)
        }) as unknown as connectionBDFormGroup;
        break;
      }
      case 2: {
    
        this.urlImage = "./assets/api.svg";

        this.api = this.builder.group({
          ConjuntNameApi: new FormControl('', Validators.required)
        }) as unknown as ApiFormGroup;


        this.token = this.token + Date.now();

        break;
      }

    }
  }

  createConnectionDB()
  {

    if(this.connectionBD.valid)
    {
      let ID_Usuario = sessionStorage.getItem("id_user");
      let ServerName = this.connectionBD.controls.ServerName.value;
      let SQLQuery = this.connectionBD.controls.SQLQuery.value;
      let ConjuntName= this.connectionBD.controls.ConjuntName.value;
      if(ID_Usuario)
      {
        this.conjuntDataService.createConnectionData({ServerName, ID_Usuario, ConjuntName, SQLQuery}).subscribe((data) => {
           
           if(data.status == 200 && data.message)
           {
             alert("Conexion Creada")
             this.connectionBD.controls.ConjuntName.reset();
             this.connectionBD.controls.ServerName.reset();
             this.connectionBD.controls.SQLQuery.reset();
           }
        }, (err) => {
          alert("error al crear conexion a base de datos");
        })
  
      }else{
        window.location.href = "/"
      }
    }else{
      alert("Ingresa todos los datos");

    }
    
  }

  generateAPI() {
    if(this.api.controls.ConjuntNameApi.valid)
    {
    let conjuntName = this.api.controls.ConjuntNameApi.value;

    let id = sessionStorage.getItem("id_user");
    if(id)
    {
      this.generatedURL = `http://<server.ip>:3000/ConjuntData/setData?token=${this.token}&data=<YOUR DATA NUMBER>&ID_Usuario=${id}&ConjuntName=${conjuntName}`;
    }else{
      window.location.href = "/";
    }
    
    }
  }


}
