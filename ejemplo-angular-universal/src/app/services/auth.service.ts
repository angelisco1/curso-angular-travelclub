import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACK = environment.BACK_BASE_URL

type RespLogin = { jwt: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // logueado$ = new Subject<boolean>()
  logueado$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    const hayToken = localStorage.getItem('jwt') ? true : false
    console.log({hayToken})
    this.logueado$ = new BehaviorSubject<boolean>(hayToken)
  }

  login(credenciales: any): Observable<RespLogin> {
    return this.http.post<RespLogin>(`${URL_BACK}/login`, credenciales)
      .pipe(
        tap((resp: RespLogin) => {
          // console.log(resp.jwt)
          localStorage.setItem('jwt', resp.jwt)
          this.logueado$.next(true)
        })
      )
  }
}