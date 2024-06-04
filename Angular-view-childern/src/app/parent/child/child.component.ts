import { Component ,Input,ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  title : string = 'Demo Component';
  @Input() message : string = '';
  constructor(){
    console.log('demo component constructor child')
    console.log('demo component constructor child')
    console.log(this.title)
  }
}
