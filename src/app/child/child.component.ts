import { AfterContentInit, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @ContentChild('childcont') childparagraph : ElementRef;

  constructor(private renderer: Renderer2){}

  addText() : void {
    let text = this.renderer.createText(" this is the added text");
    this.renderer.appendChild(this.childparagraph.nativeElement,text);
  }
 

 
  
}
