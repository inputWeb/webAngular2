import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Importar las rutas en el core de Angular
import {routing, appRoutingProviders}  from './app.routing';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { materialsModule } from './materialsModule';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialsModule,
    routing,
    AppRoutingModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
