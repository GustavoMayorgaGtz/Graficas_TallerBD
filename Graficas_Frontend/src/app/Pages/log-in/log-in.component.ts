import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginFormBuild } from 'src/app/Interfaces';
import { LoginService } from 'src/app/Servicios/Login/login.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  public form: LoginFormBuild;
  constructor(private builder: FormBuilder, private login: LoginService) {
    this.form = this.builder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }) as LoginFormBuild;

  }

  ngOnInit(): void {
  }

  Login(): void {
    //Obtenemos los valores de los formulario
    if (this.form.valid) {
      let username = this.form.get("username")?.value;
      let password = this.form.get("password")?.value;

      this.login.Login({email:username, password}).subscribe((data) => {
        if(data.status == 200)
        {
          if(data.logged)
          {
            sessionStorage.setItem("id_user", ""+data.id)
            window.location.href="/administrador";
          }else{
            alert("usuario o contraseña incorrecta")
          }

        }
      })
    }
  }

  Registrar()
  {
    window.location.href="/registrar"
  }

}
