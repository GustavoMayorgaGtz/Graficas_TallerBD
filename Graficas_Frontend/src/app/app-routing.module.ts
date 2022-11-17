import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { CreateChartComponent } from './Pages/create-chart/create-chart.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { RegistroUsuarioComponent } from './Pages/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: "", component: LogInComponent},
  {path: "administrador", component: AdministradorComponent},
  {path: "registrar", component: RegistroUsuarioComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "create", component: CreateChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
