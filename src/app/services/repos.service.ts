import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient, private userService:UserService) { }

  getRepos(page:number):Observable<any>{
    return this.http.get(`https://api.github.com/user/repos?page=${page}`,{
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `token ${this.userService.getToken()}`
      }
    });

  }

}
