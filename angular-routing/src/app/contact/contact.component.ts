import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName : string ='';
  lastname : string = '';
  country : string = 'usa';
  message : string = '';

  isSubmitted : boolean = false;

  OnSubmit(){
    this.isSubmitted=true;
  }
  canExit(){
    if((this.firstName || this.lastname || this.message) && !this.isSubmitted){
      confirm('You have some unsaved changes. do you want to continue?')
    }else{
      return true;
    }
    return null;
  }
}
