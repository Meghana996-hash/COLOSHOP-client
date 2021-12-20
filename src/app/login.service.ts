import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
    URL="http://localhost:8002";
  
  validUser(loginForm:any):Observable<any>{
    var URL=this.URL+'/login';
    let header ={'content-type':'application/json'};
     return this.http.post(URL,loginForm,{'headers':header,responseType:'text'});
  }
}