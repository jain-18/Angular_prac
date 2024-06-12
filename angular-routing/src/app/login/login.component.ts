import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('username') username : ElementRef ;
  @ViewChild('password') password : ElementRef;

  authService : AuthService = inject(AuthService);
  router : Router = inject(Router);
  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout = Boolean(queries.get('logout'))
      if(logout){
        this.authService.logout();
        alert('You have logout! Islogged = '+this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){
    const username = this.username.nativeElement.value;
    const paassword = this.password.nativeElement.value;

    const user = this.authService.login(username,paassword);
    

    if(user === undefined){
      alert('The login credential you have enetered is not correct.');
    }
    else{
      alert('Welcome '+user.name+'. You Are logged in');
      this.router.navigate(['/Courses']);
    }

  }
}
