import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Authsponse } from '../Model/Authsponse';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  signup(email, password) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<Authsponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnlpBl90SgB8UkWPFqWMENAwLAjc4oqh0',
        data
      )
      .pipe(
        catchError((err) => {
          let errorMessage = 'An unknown error has occured'
          if(!err.error || !err.error.error){
            return throwError(()=> errorMessage);
          }
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'Email already exists';
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'Password sign-in is disabled for this project';
          }
          return throwError(() => errorMessage);
        })
      );
  }
}
