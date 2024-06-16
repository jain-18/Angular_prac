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
  gender  : string  = '';
  country : string ='';
  city : string = '';
  region : string = '';
  postal : string = '';
  userName : string = '';

  first : string ='';
  last : string ='';
  ddob : string ='';
  

  @ViewChild('registrationForm') form  : NgForm

  genders = [
    {id : 'check-male', value : 'male',display : 'Male'},
    {id : 'check-female', value : 'female', display : 'Female'},
    {id : 'check-other', value : 'other', display : 'prefered not to say'}
  ]

  OnFormSubmitted(){
    console.log(this.form);

    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.email = this.form.value.email;
    this.dob = this.form.value.dob;
    this.userName = this.form.value.usernamee;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;

    this.form.reset();
  }

  GenerateUsername(){
    let username = '';
    if(this.first.length >= 3){
      username += this.first.slice(0,3);
    }
    else{
      username += this.first;
    }

    if(this.last.length >= 3){
      username += this.last.slice(0,3);
    }
    else{
      username += this.last;
    }

    let datetime = new Date(this.ddob) ;
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
      usernamee:username
    })
  }


}
