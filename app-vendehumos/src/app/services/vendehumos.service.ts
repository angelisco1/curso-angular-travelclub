import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { VendeHumos } from '../types/vendehumos';

const URL: string = 'http://localhost:4300/vendehumos'

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  vhCreado$ = new EventEmitter<VendeHumos>()
  vhActualizado$ = new EventEmitter<VendeHumos>()

  constructor(private http: HttpClient) { }

  getVendehumos(): Observable<Array<VendeHumos>> {
    return this.http.get<Array<VendeHumos>>(URL)
  }

  createVendehumo(nuevoVendehumo: VendeHumos): Observable<VendeHumos> {
    return this.http.post<VendeHumos>(URL, nuevoVendehumo)
      .pipe(
        tap((nuevoVh: VendeHumos) => {
          this.vhCreado$.emit(nuevoVh)
        })
      )
  }

  voteVendehumo(id: number, votosActualizados: number): Observable<VendeHumos> {
    return this.http.patch<VendeHumos>(`${URL}/${id}`, {votos: votosActualizados})
      .pipe(
        tap((vhActualizado: VendeHumos) => {
          this.vhActualizado$.emit(vhActualizado)
        })
      )
  }
}
