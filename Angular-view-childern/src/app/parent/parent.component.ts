import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('para') paraEl : ElementRef;

  showParaValue(){
    console.log(this.paraEl.nativeElement)
  }
}
