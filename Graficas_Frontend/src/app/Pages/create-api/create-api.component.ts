import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.css']
})
export class CreateApiComponent implements OnInit {

  public urlImage: String = "./assets/world.svg";
  public menu : number = 0;
  public token :string = "BC214KDF21D:325DT:EWRTEWTR";
  public generatedURL !: String;
  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(option: number)
  {
    this.menu = option;
    switch(this.menu)
    { 
      case 0:{
        this.urlImage = "./assets/world.svg";
        break;
      }
      case 1: {
        this.urlImage = "./assets/server.svg";
        break;
      }
      case 2:{
        this.urlImage = "./assets/api.svg";
        
        this.token = this.token + Date.now();

        break;
      }

    }
  }

  generateAPI()
  {
    let id = 1;
    let ConjuntName = "Graph1Data";
    this.generatedURL = `http://<server.ip>:3000/ConjuntData/setData?token=${this.token}&data=<YOUR DATA NUMBER>&ID_Usuario=${id}&ConjuntName=${ConjuntName}`;
  }


}
