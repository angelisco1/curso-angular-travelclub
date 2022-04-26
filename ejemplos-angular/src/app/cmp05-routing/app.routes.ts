import { RouterModule, Routes } from "@angular/router";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { Error404Component } from "./error404/error404.component";
import { AuthGuard } from "./guards/auth.guard";
import { DatosGuardadosGuard } from "./guards/datos-guardados.guard";
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";


const USUARIOS_ROUTES: Routes = [
  { path: ':id/info', component: InfoUsuarioComponent, canActivate: [AuthGuard] },
  { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [DatosGuardadosGuard] },
]

// /usuarios/43/info

const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)