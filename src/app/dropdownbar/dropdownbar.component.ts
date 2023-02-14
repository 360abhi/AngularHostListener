import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdownbar',
  templateUrl: './dropdownbar.component.html',
  styleUrls: ['./dropdownbar.component.css']
})
export class DropdownbarComponent {

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
