import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form  : NgForm

  genders = [
    {id : 'check-male', value : 'male',display : 'Male'},
    {id : 'check-female', value : 'female', display : 'Female'},
    {id : 'check-other', value : 'other', display : 'prefered not to say'}
  ]

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.country);
    
  }
}
