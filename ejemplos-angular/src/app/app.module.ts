import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Cmp01PipesComponent } from './cmp01-pipes/cmp01-pipes.component';
import { DescuentoPipe } from './cmp01-pipes/descuento.pipe';
import { FiltroPipe } from './cmp01-pipes/filtro.pipe';
import { Cmp02OutputComponent } from './cmp02-output/cmp02-output.component';
import { MiBotonComponent } from './cmp02-output/mi-boton/mi-boton.component';
import { Cmp03DirectivasComponent } from './cmp03-directivas/cmp03-directivas.component';
import { MarcarDirective } from './cmp03-directivas/marcar.directive';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01PipesComponent,
    DescuentoPipe,
    FiltroPipe,
    Cmp02OutputComponent,
    MiBotonComponent,
    Cmp03DirectivasComponent,
    MarcarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
