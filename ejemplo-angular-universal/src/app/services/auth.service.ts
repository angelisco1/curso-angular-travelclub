import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACK = environment.BACK_BASE_URL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credenciales: any) {
    return this.http.post(`${URL_BACK}/login`, credenciales)
      .pipe(
        tap((resp) => {
          // console.log(resp.jwt)
        })
      )
  }
}