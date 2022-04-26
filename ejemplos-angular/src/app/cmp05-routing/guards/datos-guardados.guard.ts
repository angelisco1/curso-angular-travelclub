import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IComponentCanDeactivate {
  hasGuardadoLosDatos(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})
export class DatosGuardadosGuard implements CanDeactivate<IComponentCanDeactivate> {
  canDeactivate(
    component: IComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.hasGuardadoLosDatos() || confirm('Quieres salir?? Perderas los datos...');
  }
}
