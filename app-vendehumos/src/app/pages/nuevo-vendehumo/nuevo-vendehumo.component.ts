import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { VendeHumos } from 'src/app/types/vendehumos';

@Component({
  selector: 'app-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent implements OnInit {
  formulario: FormGroup

  constructor(private vhService: VendehumosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('Otro vendehumos...', Validators.required),
      avatar: new FormControl('https://reqres.in/img/faces/6-image.jpg', Validators.required),
      votos: new FormControl(0),
    })
  }

  ngOnInit(): void {
  }

  crear() {
    this.vhService.createVendehumo(this.formulario.value)
      .subscribe(() => {
        this.router.navigateByUrl('/')
      })
  }

}
