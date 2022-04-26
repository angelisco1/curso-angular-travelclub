import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = [
    { id: 1, nombre: 'Ángel' },
    { id: 2, nombre: 'Jose' },
    { id: 3, nombre: 'Oliver' },
    { id: 4, nombre: 'Alfonso' },
    { id: 5, nombre: 'Cristina' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
