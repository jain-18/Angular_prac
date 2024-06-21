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
  isLoading = false;
  errorMessage : string | null = null;
  

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form : NgForm){
    this.isLoading = true
    // console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    if(this.isLoginMode){
      //login logic
      this.isLoading = false;
      return;
    }else{
      //register logic
      this.authService.signup(email,password)
      .subscribe({
        next:(res) => {console.log(res);
          this.isLoading = false
          this.errorMessage = null
        },
        error : (errorMsg ) => {
          // console.log('error '+ errorMsg);
          this.isLoading = false;
          this.errorMessage = errorMsg;
          this.hideSnackbar();
        }
      })
    }
    form.reset();
  }

  hideSnackbar(){
    setTimeout(()=>{
      this.errorMessage = null
    },3000);
  }
}
