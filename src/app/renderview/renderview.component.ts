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
  @ViewChild('para') para : ElementRef;

  toggle: boolean = false;
  toggle2: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {}

  
  changeColor(): void {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'blue');
      // this.renderer.setStyle(this.box.nativeElement, 'color', 'white');
      // this.box.nativeElement.style.backgroundColor = 'blue'
    }else{
      this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
      // this.renderer.setStyle(this.box.nativeElement, 'color', 'black');
      // this.box.nativeElement.style.backgroundColor = 'red'
    }
  }
  changeText() : void {
    this.toggle2 = !this.toggle2;
    if (this.toggle2) {
      this.renderer.setProperty(this.para.nativeElement,'innerHTML',"the content is changed")
      // this.renderer.setStyle(this.box.nativeElement, 'color', 'white');
      // this.box.nativeElement.style.backgroundColor = 'blue'
    }else{
      this.renderer.setProperty(this.para.nativeElement,'innerHTML',"View Page of Styling App")
      // this.renderer.setStyle(this.box.nativeElement, 'color', 'black');
      // this.box.nativeElement.style.backgroundColor = 'red'
    }
    // console.log(this.para)
  //   this.para.nativeElement.style.innerHTML = "changed"
}
}
