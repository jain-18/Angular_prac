import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Authsponse } from '../Model/Authsponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  signup(email, password) {
    const data = { email : email, password: password, returnSecureToken: true };
    return this.http.post<Authsponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnlpBl90SgB8UkWPFqWMENAwLAjc4oqh0',
      data
    )
  }
}
