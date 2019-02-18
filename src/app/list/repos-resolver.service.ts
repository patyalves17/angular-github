import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ReposService } from '../services/repos.service';

@Injectable({
  providedIn: 'root'
})
export class ReposResolver implements Resolve<any> {

  constructor(private reposService:ReposService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.reposService.getRepos(1);
  }

  
}
