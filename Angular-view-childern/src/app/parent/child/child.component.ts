import { Component ,ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para') paragraphEl : ElementRef;

  @ContentChildren('para') paraElements : QueryList<ElementRef>;

  StyleParagraph(){
    this.paraElements.forEach((el) => {
      console.log(el.nativeElement)
    })
    
  }
}
