import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService : AuthService = inject(AuthService);
  isLoginMode : boolean = true;
  

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form : NgForm){
    // console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    if(this.isLoginMode){
      //login logic
      return;
    }else{
      //register logic
      this.authService.signup(email,password)
      .subscribe({
        next:(res) => {console.log(res)},
        error : (err) => {console.log('error '+ err)}
      })
    }
    form.reset();
  }
}
