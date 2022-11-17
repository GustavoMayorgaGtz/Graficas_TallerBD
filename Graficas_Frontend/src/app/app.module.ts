import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { RegistroUsuarioComponent } from './Pages/registro-usuario/registro-usuario.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateChartComponent } from './Pages/create-chart/create-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdministradorComponent,
    AdministradorComponent,
    RegistroUsuarioComponent,
    DashboardComponent,
    CreateChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
