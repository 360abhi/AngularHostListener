import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostdirective]'
})
export class HostdirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // @HostListener('click') onClick () : void {
  //   // console.log("you just clicked")
  //   this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')
  // }
  @HostListener('mouseout') onMouseover(): void {
    // console.log('mouse over')
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
  }
  @HostListener('mouseover') onMouser(): void {
    // console.log('mouse over')
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')
  }
}
