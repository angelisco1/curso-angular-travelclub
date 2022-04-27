import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Cmp01PipesComponent } from './cmp01-pipes/cmp01-pipes.component';
import { DescuentoPipe } from './cmp01-pipes/descuento.pipe';
import { FiltroPipe } from './cmp01-pipes/filtro.pipe';
import { Cmp02OutputComponent } from './cmp02-output/cmp02-output.component';
import { MiBotonComponent } from './cmp02-output/mi-boton/mi-boton.component';
import { Cmp03DirectivasComponent } from './cmp03-directivas/cmp03-directivas.component';
import { MarcarDirective } from './cmp03-directivas/marcar.directive';
import { Cmp04ValidacionesFormComponent } from './cmp04-validaciones-form/cmp04-validaciones-form.component';
import { Cmp05RoutingComponent } from './cmp05-routing/cmp05-routing.component';
import { UsuariosComponent } from './cmp05-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp05-routing/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp05-routing/editar-usuario/editar-usuario.component';
import { Error404Component } from './cmp05-routing/error404/error404.component';
import { RoutingModule } from './cmp05-routing/app.routes';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en'
import localeEs from '@angular/common/locales/es'
import { TraduccionInexistente } from './cmp01-pipes/traduccion-inexistente';

export const httpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    Cmp01PipesComponent,
    DescuentoPipe,
    FiltroPipe,
    Cmp02OutputComponent,
    MiBotonComponent,
    Cmp03DirectivasComponent,
    MarcarDirective,
    Cmp04ValidacionesFormComponent,
    Cmp05RoutingComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: TraduccionInexistente
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEs, 'es')
    registerLocaleData(localeEn, 'en')
  }
}