import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { CLIENT_ID, CLIENT_SECRET } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userService:UserService){}

    isAuthenticated(){
        const promis= new Promise (
            (resolve,reject) =>{
                setTimeout(()=>{
                    resolve(this.userService.hasToken());
                },80);
            }
        );
        return promis;
    }

  getAccessToken(code:string): Observable<any> {
    // return this.http.post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`, 
    return this.http.post(`https://hidden-woodland-32300.herokuapp.com/https://github.com/login/oauth/access_token`, 
    {
      'client_id':CLIENT_ID,
      'client_secret':CLIENT_SECRET,
      'code':code,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Action':'application/json',
        'Accept' : 'application/json',
        'X-Requested-With':'XMLHttpRequest'
      }
    }).pipe(tap(res =>{
      this.userService.setToken(res.access_token);
      return res;
    }));
  }

    logout(){
        this.userService.clearToken();
    }
}
