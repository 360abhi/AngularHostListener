import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdir]'
})
export class TestdirDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
   }
   changeColor(color:string): void {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color)
   }

}
