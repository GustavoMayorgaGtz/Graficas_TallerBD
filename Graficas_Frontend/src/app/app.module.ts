import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { AdministradorComponent } from './Pages/administrador/administrador.component';
import { RegistroUsuarioComponent } from './Pages/registro-usuario/registro-usuario.component';
import { CreateApiComponent } from './Pages/create-api/create-api.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdministradorComponent,
    AdministradorComponent,
    RegistroUsuarioComponent,
    CreateApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
    
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
