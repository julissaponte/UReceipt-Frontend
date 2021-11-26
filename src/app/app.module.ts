import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelpComponent } from './components/help/help.component';
import { EmisionComponent } from './components/emision/emision.component';
import {HistorialComponent} from './components/historial/historial.component';
import { RecibosComponent } from './components/recibos/recibos.component';
import { FilterComponent } from './components/filter/filter.component';
import { CarteraxComponent } from './components/carterax/carterax.component';
import { CarteragastoinicialComponent } from './components/carteragastoinicial/carteragastoinicial.component';
import { CarteragastofinalComponent } from './components/carteragastofinal/carteragastofinal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CambiarPasswordComponent,
    NavbarComponent,
    HelpComponent,
    EmisionComponent,
    HistorialComponent,
    RecibosComponent,
    FilterComponent,
    CarteraxComponent,
    CarteragastoinicialComponent,
    CarteragastofinalComponent
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
