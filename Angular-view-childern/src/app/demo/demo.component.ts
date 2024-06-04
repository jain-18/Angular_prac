import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title : string = 'Demo Component';

  @Input() message: string = '';

  constructor(){
    console.log('demo contructor')
    console.log(this.title)
    console.log(this.message)
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('On changes called')
    console.log(this.title)
    console.log(this.message)
    console.log(changes)
  }
 
}
