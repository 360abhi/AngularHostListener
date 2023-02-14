import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // @HostBinding()
  classes = {
    hidden: true,
    block: false,
  };
  toggle: boolean = false;

  @HostListener('click') onclick() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.classes = {
        hidden: false,
        block: true,
      };
    }else{
      this.classes = {
        hidden: true,
        block: false,
      };
    }
  }
}
