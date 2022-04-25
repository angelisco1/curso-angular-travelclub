import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-output',
  templateUrl: './cmp02-output.component.html',
  styleUrls: ['./cmp02-output.component.css']
})
export class Cmp02OutputComponent implements OnInit {
  txt = 'Botón 2'
  constructor() { }

  ngOnInit(): void {
  }

}
