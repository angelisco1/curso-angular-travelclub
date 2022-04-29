import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendehumoComponent } from './components/vendehumo/vendehumo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoVendehumoComponent } from './pages/nuevo-vendehumo/nuevo-vendehumo.component';

@NgModule({
  declarations: [
    AppComponent,
    VendehumoComponent,
    InicioComponent,
    NuevoVendehumoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
