import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const registerApi = 'http://old-stuff-exchange-api.herokuapp.com/api/users/register' 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  createAccount(data): Observable<any> {
    return this.httpClient.post(registerApi, data);
  }
}
