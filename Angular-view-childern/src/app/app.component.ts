import { ViewChildren } from '@angular/core';
import { Component, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-view-childern'

  toggle : Boolean = true;
  onToggle(){
    this.toggle = !this.toggle;
  }
}
