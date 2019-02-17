import { Injectable } from '@angular/core';

const KEY = 'authToken'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setToken(token: string) {
    window.sessionStorage.setItem(KEY, JSON.stringify(token) );
  }

  getToken() {
    return JSON.parse(sessionStorage.getItem(KEY));
  }

  // getToken2() {
  //   return JSON.parse(sessionStorage.getItem(KEY)).access_token;
  // }

  clearToken(){
    sessionStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }
}
