import { Component, OnInit } from '@angular/core';
import { DigimonsService } from '../services/digimons.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {
  digimon$!: Observable<any>

  constructor(
    private digimonsService: DigimonsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get('name')
      if (name) {
        this.digimon$ = this.digimonsService.getDigimonByName(name)
      }
    })
  }

}
