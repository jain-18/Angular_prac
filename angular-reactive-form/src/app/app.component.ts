import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { noSpaceAllowed } from './Validators/noSpaceAllowed.validator';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';

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
      firstname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        CustomValidators.noSpaceAllowed
      ]),
      lastname: new FormControl(null, [Validators.required,noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required,CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        country: new FormControl('India'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        street: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
    });

    // this.reactiveForm.get('firstname').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    this.reactiveForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }

  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }

  AddSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  DeleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  AddExperience() {
    const frmgroup = new FormGroup({
        company : new FormControl(null),
        position : new FormControl(null),
        totalExp : new FormControl(null),
        start : new FormControl(null),
        end : new FormControl(null)
    });

    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }

  DeleteExperience(index : number){
    const controls = <FormArray>this.reactiveForm.get('experience');
    controls.removeAt(index);
  }
}
