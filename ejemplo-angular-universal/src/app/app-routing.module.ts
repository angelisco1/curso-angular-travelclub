import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonComponent } from './digimon/digimon.component';
import { ListaDigimonComponent } from './lista-digimon/lista-digimon.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ListaDigimonComponent },
  { path: 'digimon/:name', component: DigimonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
