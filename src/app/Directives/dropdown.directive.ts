import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor() {}

  @HostBinding('class.hidden') className = 'hidden';
  toggle: boolean = false;

  @HostListener('click') onClick(): void {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.className = 'block';
    }else{
      this.className = 'hidden'
    }
  }
}
