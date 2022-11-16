import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { RegistroUsuarioComponent } from './Pages/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: "", component: LogInComponent},
  {path: "administrador", component: AdministradorComponent},
  {path: "registrar", component: RegistroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
