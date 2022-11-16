import { ConstantPool } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces';
import { UsuariosService } from 'src/app/Servicios/Usuarios/usuarios.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit, OnDestroy {
  public menu: Number = 0;
  public listIds: number[] = [];
  public listCorreo: string[] = [];
  public listNombre: string[] = [];
  public listPass: string[] = [];
  public messageError: string = "";


  constructor(private usuarioService: UsuariosService) { }

  ngOnDestroy(): void {
    this.listCorreo = [];
    this.listIds = [];
    this.listNombre = [];
    this.listPass = [];
  }

  ngOnInit(): void {
    this.prepareData();
  }

  selectMenu(option: Number) {
    this.menu = option;
    if (option == 0) {
      this.prepareData();
    }
  }

  prepareData() {
    this.ngOnDestroy();
    this.usuarioService.FindAllUsers().subscribe((data) => {
      let usuarios = data.message as Usuario[];
      usuarios.forEach((element) => {
        this.listCorreo.push(element.Correo);
        this.listIds.push(element.ID_Usuario);
        this.listNombre.push(element.Nombre);
        this.listPass.push(element.Password);
      })
    }, (err) => {
      this.messageError = "No hay usuarios"
    })
  }
 
  dropUser(id: number): void {
    let email = this.listCorreo[id];
    let password = this.listPass[id];
    console.log(email)
    console.log(password)
    if(email && password)
    {
      this.usuarioService.DropUser({email, password}).subscribe((data) => {
        alert('Usuario borrado exitosamente')
        console.log(data);
      })
    }
  }

  exit(){
    window.location.href = "/";
  }
}
