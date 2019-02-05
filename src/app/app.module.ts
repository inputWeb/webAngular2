import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Importar las rutas en el core de Angular
import {routing, appRoutingProviders}  from './app.routing';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { materialsModule } from './materialsModule';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SliderNavComponent } from './slider-nav/slider-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ArticulosComponent,
    PaginatorComponent,
    SliderNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialsModule,
    routing,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
