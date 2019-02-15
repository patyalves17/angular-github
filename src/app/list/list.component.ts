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

  constructor(private route:Router, private authService:AuthService, private reposService:ReposService) {
    console.log("ListComponent");
   }

  ngOnInit() {
    this.reposService.getRepos().subscribe(repos=>{
      console.log(repos);
    });

  }

  doLogout(){
    console.log("doLogout");
    this.authService.logout();
    this.route.navigate(['']);
  }
  

}
