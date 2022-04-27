import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DescuentoPipe } from './descuento.pipe';

@Component({
  selector: 'app-cmp01-pipes',
  templateUrl: './cmp01-pipes.component.html',
  styleUrls: ['./cmp01-pipes.component.css']
})
export class Cmp01PipesComponent implements OnInit {

  producto = {
    nombre: 'one plus 8',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt vel eligendi harum vero earum dolores, porro adipisci enim nemo laudantium totam ullam, eum non voluptatibus illo? Ratione, soluta veniam.',
    precio: 400,
    fechaCompra: new Date(),
  }

  opcion = 'uppercase'

  nombresProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['One Plus 8', 'One Plus 9', 'One Plus 10'])
    }, 1500)
  })

  cuenta = 0

  colores = ['amarillo']
  textoFiltro = ''

  lenguajes: Array<string> = ['en', 'es']
  lenguajeSeleccionado: string

  constructor(private translateService: TranslateService) {
    // ESTO IRIA EN EL app.component.ts
    const cookies = document.cookie
    const [key, lang] = cookies.split('=')
    translateService.setDefaultLang(lang)

    this.lenguajeSeleccionado = translateService.getDefaultLang()
  }

  ngOnInit(): void {
    const nuevoPrecio = new DescuentoPipe().transform(this.producto.precio, 50)
    console.log(nuevoPrecio)
  }

  addColor(event: any) {
    const nuevoColor = event.target.value
    // this.colores.push(nuevoColor)
    this.colores = [...this.colores, nuevoColor]
  }

  cambiarLenguaje(event: any) {
    this.lenguajeSeleccionado = event.target.value
    this.translateService.use(this.lenguajeSeleccionado)
  }

}
