import { Component, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  firstName : string ='';
  lastName : string ='';
  dob : string = '';
  email : string ='';
  

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
    console.log(this.form.value.address.country);
    console.log(this.form.value.address.city);
  }

  GenerateUsername(){
    let username = '';
    if(this.firstName.length >= 3){
      username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName;
    }

    if(this.lastName.length >= 3){
      username += this.lastName.slice(0,3);
    }
    else{
      username += this.lastName;
    }

    let datetime = new Date(this.dob) ;
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    // this.form.control['username'].value = username;
    // this.form.setValue({
    //   firstname : this.form.value.firstname,
    //   lastname : this.form.value.lastname,
    //   email : this.form.value.email,
    //   phone : this.form.value.phone,
    //   gender : this.form.value.gender,
    //   dob : this.form.value.dob,
    //   username : username,
    //   address: {
    //     street1 : this.form.value.address.street1,
    //     street2 : this.form.value.address.street2,
    //     city : this.form.value.address.city,
    //     country : this.form.value.address.country,
    //     region : this.form.value.address.region,
    //     postal : this.form.value.address.postal
    //   }
    // })

    this.form.form.patchValue({
      username:username
    })
  }


}
