import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_DIGIMON: string = `${environment.API_DIGIMON_BASE_URL}/digimon`

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  constructor(private http: HttpClient) { }

  getDigimons() {
    return this.http.get(URL_DIGIMON)
  }

  getDigimonByName(name: string) {
    return this.http.get(`${URL_DIGIMON}/name/${name}`)
      .pipe(
        map((resp: any) => {
          // console.log({resp})
          return resp[0]
        })
      )
  }
}
