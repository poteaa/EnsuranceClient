import { Injectable } from '@angular/core';
import { HttpBackendService } from './../../../core/services/http-backend.service';
import { AuthRequest } from './auth-request.model';
import { AuthResponse } from './auth-response.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: AuthResponse;
  private readonly loginUrl = 'login';
  private readonly token = 'token';

  constructor(private httpBackendService: HttpBackendService) { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.httpBackendService.post<AuthResponse, AuthRequest>(this.loginUrl, authRequest)
      .pipe(
        map((logged: AuthResponse) => {
          this.loggedUser = logged;
          localStorage.setItem(this.token, logged.token);
          return logged;
        })
      );
  }

  logout(): Observable<boolean>  {
    const loggedUser = this.loggedUser ? this.loggedUser :
      new AuthResponse('', this.getToken());
    return this.httpBackendService.put(this.loginUrl, loggedUser)
      .pipe(
        map(() => {
          localStorage.removeItem(this.token);
          this.loggedUser = null;
          return true;
        })
      );
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  getToken() {
    return localStorage.getItem(this.token);
  }
}
