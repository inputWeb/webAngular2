import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Importar las rutas en el core de Angular
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { materialsModule } from './materialsModule';
import { ErrorComponent } from './error/error.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ArticulosComponent,
    PaginatorComponent,
    LoginComponent,
    NavbarComponent,
    UsuariosComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    materialsModule,
    routing,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
