import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if (['/digimons'].includes(request.url)) {
      // const token = localStorage.getItem('jwt')
      const token = '1234'

      if (token) {
        const newHeaders = request.headers.append('Authorization', 'Bearer ' + token)
        const newRequest = request.clone({ headers: newHeaders })
        return next.handle(newRequest)
      }
    // }

    return next.handle(request)
  }
}
