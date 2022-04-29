import { Component, Input, OnInit } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { VendeHumos } from 'src/app/types/vendehumos';

@Component({
  selector: 'app-vendehumo',
  templateUrl: './vendehumo.component.html',
  styleUrls: ['./vendehumo.component.css']
})
export class VendehumoComponent implements OnInit {
  @Input() vendehumo: VendeHumos | null = null

  constructor(private vhService: VendehumosService) { }

  ngOnInit(): void {
  }

  votar() {
    if (this.vendehumo?.id) {
      this.vhService.voteVendehumo(this.vendehumo.id, this.vendehumo.votos + 1)
        .subscribe()
    }
  }
}
