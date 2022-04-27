import { Component, OnInit } from '@angular/core';
import { DigimonsService } from '../services/digimons.service';

@Component({
  selector: 'app-lista-digimon',
  templateUrl: './lista-digimon.component.html',
  styleUrls: ['./lista-digimon.component.css']
})
export class ListaDigimonComponent implements OnInit {
  listaDigimons: Array<any> = []

  constructor(private digimonsService: DigimonsService) { }

  ngOnInit(): void {
    this.digimonsService.getDigimons()
      .subscribe((datos: any) => {
        this.listaDigimons = datos
      })
  }

}
