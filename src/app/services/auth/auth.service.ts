import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000"

  login(user: User): Observable<any>{
    return this.httpClient.post(this.url + '/login' , JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      observe: "response"
    })
  }

  registrar(user: User): Observable<any>{
    return this.httpClient.post(this.url + '/register' , JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      observe: "response"
    })
  }

}
