import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';

  reactiveForm : FormGroup;

  ngOnInit(){
      this.reactiveForm = new FormGroup({
        firstname :  new FormControl(null,Validators.required),
        lastname :  new FormControl(null,Validators.required),
        email :  new FormControl(null,[Validators.required,Validators.email]),
        username :  new FormControl(null),
        dob :  new FormControl(null),
        gender :  new FormControl('male'),
        country :  new FormControl('India'),
        city :  new FormControl(null),
        region :  new FormControl(null),
        street :  new FormControl(null),
        postal :  new FormControl(null),
      })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }
} 
