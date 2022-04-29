import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // this.isLoggedIn = localStorage.getItem('jwt') ? true : false

    this.auth.logueado$
      .subscribe((logueado: boolean) => {
        this.isLoggedIn = logueado
      })
  }

  logout() {
    localStorage.removeItem('jwt')
    this.auth.logueado$.next(false)
    Swal.fire("Logout")
  }

  cambiarVolumen(video: HTMLMediaElement, event: any) {
    video.volume = Number(event.target.value) / 100
  }
}
