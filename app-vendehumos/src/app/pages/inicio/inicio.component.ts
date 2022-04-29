import { Component, OnInit } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { VendeHumos } from 'src/app/types/vendehumos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaVendehumos: Array<VendeHumos> = []

  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
    this.vhService.getVendehumos()
      .subscribe((vendehumos) => {
        this.listaVendehumos = vendehumos
      })

    this.vhService.vhActualizado$
      .subscribe((vhActualizado) => {
        this.listaVendehumos.forEach((vh) => {
          if (vh.id === vhActualizado.id) {
            vh.votos = vhActualizado.votos
          }
        })
      })

    this.vhService.vhCreado$
      .subscribe((nuevoVh) => {
        this.listaVendehumos = [...this.listaVendehumos, nuevoVh]
      })
  }

}
