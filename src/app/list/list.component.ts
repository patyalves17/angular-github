import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
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

  constructor(private route:Router, 
    private router:ActivatedRoute,
    private authService:AuthService, 
    private reposService:ReposService) {
   }

  ngOnInit() {
    this.router.data.subscribe((data:Data)=>{
      this.repos=data['repos'];
    });
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
