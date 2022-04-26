import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  id: string | null = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // const id = params.get('id')
      // if (id) {
      //   this.id = id
      // }
      if (params.has('id')) {
        this.id = params.get('id')
      }
    })
  }

}

// () => {}
// (a, b) => {}
// (a) => {}
// a => {}
// a => a+1
// a => {return a+1}