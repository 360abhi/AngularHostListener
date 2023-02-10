import {  Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TestdirDirective } from '../Directives/testdir.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @ContentChild('childcont') childparagraph : ElementRef;
  @ViewChild(TestdirDirective) myDirecitve: TestdirDirective

  constructor(private renderer: Renderer2){}

  addText() : void {
    let text = this.renderer.createText(" this is the added text");
    this.renderer.appendChild(this.childparagraph.nativeElement,text);
    this.renderer.setStyle(this.childparagraph.nativeElement,'color', 'red')
  }
 
  changeColor(color:string) : void {
    this.myDirecitve.changeColor(color);
  }  
}
