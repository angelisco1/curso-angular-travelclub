import { Directive, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @HostBinding('style.backgroundColor') colorFondo: string = ''
  @Input('appMarcar') color = ''
  @Input('color1') c1 = ''
  @Input('color2') c2 = ''

  constructor() {
    console.log('Constructor', this.color)
  }

  ngOnInit() {
    console.log('NgOnInit', this.color)
    if (!this.color) {
      this.color = 'yellow'
    }

    console.log(this.c1, this.c2)
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = ''
  }

}
