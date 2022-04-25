import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp03-directivas',
  templateUrl: './cmp03-directivas.component.html',
  styleUrls: ['./cmp03-directivas.component.css']
})
export class Cmp03DirectivasComponent implements OnInit {
  colorParrafo1 = 'orange'
  colorParrafo2 = 'blue'

  constructor() { }

  ngOnInit(): void {
  }

}
