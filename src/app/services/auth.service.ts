import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  // authenticate(userName:string, password:string){
  //   return this.http.post(`${API_URL}/user/login`,{ userName, password }, { observe : 'response' })
  //   .pipe(tap(res =>{
  //     const authToken=res.headers.get('x-access-token');
  //     this.userService.setToken(authToken);
  //   }));
  // }

    logout(){
        this.loggedIn=false;
        console.log("loggedIn -->",this.loggedIn);
    }
}
