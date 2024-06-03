// viewChildren
import { ViewChildren } from '@angular/core';
import { Component, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-view-childern'

fullName : string = '';
nae:string=''

  @ViewChildren('inputEl') inputElements:QueryList< ElementRef>

  show(){
    this.inputElements.forEach((el) =>{
      console.log(el.nativeElement.value)
      this.nae += el.nativeElement.value + ' ';

    } )
    this.fullName = this.nae.trim();
  }


}
