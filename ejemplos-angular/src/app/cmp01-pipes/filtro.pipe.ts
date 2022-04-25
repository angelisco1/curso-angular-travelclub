import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('Pasa por el filtro')
    return value.filter((color) => {
      return color.includes(filtro)
    })
  }

}
