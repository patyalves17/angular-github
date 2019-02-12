import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn=false;

    isAuthenticated(){
        const promis= new Promise (
            (resolve,reject) =>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                },800);
            }
        );
        return promis;
    }

    login(){
        this.loggedIn=true;
    }
    logout(){
        this.loggedIn=false;
    }
}
