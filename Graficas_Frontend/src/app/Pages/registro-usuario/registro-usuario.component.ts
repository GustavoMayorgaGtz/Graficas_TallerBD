import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateUserBuild, LoginFormBuild } from 'src/app/Interfaces';
import { UsuariosService } from 'src/app/Servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {


  public form !: CreateUserBuild;
  constructor(private builder: FormBuilder, private usuario: UsuariosService) {
    this.form = this.builder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required])
    }) as unknown as CreateUserBuild;

  }

  ngOnInit(): void {
  }

  Registrar(): void {
    //Obtenemos los valores de los formulario
    if (this.form.valid) {
      let username = this.form.get("username")?.value;
      let password = this.form.get("password")?.value;
      let email = this.form.get("email")?.value;
      
      this.usuario.CreateUsuario({name:username, password, email}).subscribe((data) => {
          if(data.status == 200 && data.message)
          {
            alert("Usuario registrado!")
            window.location.href = "/";
          }else{
            alert("No pudimos registrarte :( Intentalo mas tarde")
          }
      })
    }else{
      alert("Datos no validos");
    }
  }

}
