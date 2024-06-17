import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'template-driven-form';

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required,Validators.maxLength(10)]),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        country: new FormControl('India'),
        city: new FormControl(null,Validators.required),
        region: new FormControl(null),
        street: new FormControl(null,Validators.required),
        postal: new FormControl(null,Validators.required),
      }),
      skills : new FormArray([
        new FormControl(null, Validators.required) 
      ])
    });
  }

  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills'))
    .push(new FormControl(null,Validators.required));
  }

  DeleteSkill(index : number){
    const controls  = (<FormArray>this.reactiveForm.get('skills'));
    controls.removeAt(index);
  }
}
