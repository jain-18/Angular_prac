import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../Model/Authsponse';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../Model/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  user = new BehaviorSubject<User>(null);
  router : Router = inject(Router);

  signup(email, password) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnlpBl90SgB8UkWPFqWMENAwLAjc4oqh0',
        data
      )
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          const expiresInts = new Date().getTime() + +res.expiresIn * 1000;
          const expiresIn = new Date(expiresInts);
          const user = new User(res.email, res.localId, res.idToken, expiresIn);
          this.user.next(user);
        })
      );
  }

  login(email, password) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnlpBl90SgB8UkWPFqWMENAwLAjc4oqh0',
        data
      )
      .pipe(catchError(this.handleError),tap((res)=>{
        this.handleCreateUser(res)
      }));
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  autoLogin(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
      return null;
    }
    const loggedUser = new User(user.email,user.id,user._token,new Date(user._expeireIn));
    if(loggedUser.token){
      this.user.next(loggedUser);
    }
  }

  private handleCreateUser(res) {
    const expiresInts = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInts);
    const user = new User(res.email, res.localId, res.idToken, expiresIn);
    this.user.next(user);

    localStorage.setItem('user',JSON.stringify(user));
  }

  private handleError(err) {
    console.log(err);
    let errorMessage = 'An unknown error has occured';
    if (!err.error || !err.error.error) {
      return throwError(() => errorMessage);
    }
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'The email-ID or password is invalid';
        break;
    }
    return throwError(() => errorMessage);
  }
}
