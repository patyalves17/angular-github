import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public repos:any=[];
  page:number=1;
  isMore:boolean=true;

  constructor(private route:Router, private authService:AuthService, private reposService:ReposService) {
   }

  ngOnInit() {
    this.getRepos();
  }

  loadMore(){
    this.page++;
    this.getRepos();
  }

  getRepos(){
    this.reposService.getRepos(this.page).subscribe(repos=>{
      if(repos.length<30){
        this.isMore=false;
      }
      this.repos=this.repos.concat(repos);
    });
  }

  doLogout(){
    this.authService.logout();
    this.route.navigate(['']);
  }
  

}
