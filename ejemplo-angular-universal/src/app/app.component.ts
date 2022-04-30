import { Component, HostListener } from '@angular/core';
import { interval } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  idTimeout: any = null
  segundosInactivo: number = 0

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // this.isLoggedIn = localStorage.getItem('jwt') ? true : false

    this.auth.logueado$
      .subscribe((logueado: boolean) => {
        this.isLoggedIn = logueado

        if (logueado) {
          // Si estamos logueados empezamos el contador de inactividad
          this.inactividad()
        }
      })
  }

  logout() {
    localStorage.removeItem('jwt')
    this.auth.logueado$.next(false)
  }

  cambiarVolumen(video: HTMLMediaElement, event: any) {
    video.volume = Number(event.target.value) / 100
  }

  @HostListener('window:click')
  @HostListener('window:scroll')
  @HostListener('window:mousemove')
  incrementarInactividad() {
    // Reseteamos los segundos de inactividad cuando se detecta un click sobre la página, que se mueve el ratón o que hacemos scroll
    this.segundosInactivo = 0
  }

  inactividad() {
    const subs = interval(1000)
      .subscribe((n) => {
        this.segundosInactivo += 1
        console.log('Segundos inactividad', this.segundosInactivo)
        // Al llegar a 5 segundos de inactividad hacemos el logout
        if (this.segundosInactivo === 5) {
          this.logout()
          subs.unsubscribe()
          Swal.fire("Se ha cerrado la sesión por inactividad")
        }
      })
  }
}
