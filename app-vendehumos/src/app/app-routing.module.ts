import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoVendehumoComponent } from './pages/nuevo-vendehumo/nuevo-vendehumo.component';

const routes: Routes = [
  { path: '', component: InicioComponent, data: { animation: 'Inicio' } },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent, data: { animation: 'Formulario' } }
];

export const AppRoutingModule = RouterModule.forRoot(routes)


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
