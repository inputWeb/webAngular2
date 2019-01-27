//Modulo de Rutas es para navegar entre componentes sin recargar, se basa en la URL
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//Import de los componentes
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ArticulosComponent } from './articulos/articulos.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'articulos', component: ArticulosComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);