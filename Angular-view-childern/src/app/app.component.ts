import { ViewChildren } from '@angular/core';
import { Component, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal : string = '';
  constructor(){
    console.log('App component Constructor called')
  }
  onBtnClicked(inputEl : HTMLInputElement){
    this.inputVal = inputEl.value
  }
}
