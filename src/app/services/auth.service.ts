import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}
  clientId='6e3eb5c724196e917235';
  clientSecret='4f5e1b847bd63dea9df0a9c7e4cc3c93b40b3bc1';

  loggedIn=false;

    isAuthenticated(){
        const promis= new Promise (
            (resolve,reject) =>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },80);
            }
        );
        return promis;
    }

    login(username: string, password: string) {
      this.loggedIn=true;
      console.log("loggedIn -->",this.loggedIn);
  }

  getAccessToken(code:string): Observable<any> {
  
    return this.http.post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`, 
    {
      'client_id':this.clientId,
      'client_secret':this.clientSecret,
      'code':code,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Action':'application/json',
        'Accept' : 'application/json'
      }
    });
  }

    logout(){
        this.loggedIn=false;
        console.log("loggedIn -->",this.loggedIn);
    }
}
