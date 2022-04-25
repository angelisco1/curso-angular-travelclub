import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent implements OnInit {
  @Input() textoBtn = 'Mi botón'
  @Output('nombreCambiado') cambiaNombre = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    const num = Math.floor(Math.random()*1000)
    const nuevoTexto = 'Botón ' + num
    this.cambiaNombre.emit(nuevoTexto)
  }

}
