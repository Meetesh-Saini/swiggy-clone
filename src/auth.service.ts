import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://6716c8003fcb11b265d397f4.mockapi.io/';

  constructor(private http: HttpClient) { }

  authenticateUser(data: any): Observable<any> {
    if (data.isLogin) {
      delete data.isLogin;
      return this.http.post(this.apiUrl + "login", data);
    } else {
      delete data.isLogin;
      return this.http.post(this.apiUrl + "sign-up", data);
    }
  }
}
