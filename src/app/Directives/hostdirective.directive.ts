import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostdirective]'
})
export class HostdirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor = "green";
  @HostBinding('attr.title') title;
  @HostBinding('class.abhishek') className;

  // @HostListener('click') onClick () : void {
  //   // console.log("you just clicked")
  //   this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')
  // }

  @HostListener('click') myClick() {
    this.bgColor = 'yellow';
    this.className = true;
    this.title = "this is my title"
  }

  @HostListener('mouseout') onMouseover(): void {
    // console.log('mouse over')
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','pink')
  }
  @HostListener('mouseover') onMouser(): void {
    // console.log('mouse over')
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','red')
  }
}
