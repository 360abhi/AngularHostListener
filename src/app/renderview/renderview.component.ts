import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-renderview',
  templateUrl: './renderview.component.html',
  styleUrls: ['./renderview.component.css'],
})
export class RenderviewComponent implements AfterViewInit {
  @ViewChild('box') box: ElementRef;
  toggle: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {}

  changeColor(): void {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'blue');
    }else{
      this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
    }
  }
}
