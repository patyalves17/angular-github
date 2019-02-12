import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  doLogin(){
    console.log("doLogin");
    this.authService.login();
    this.route.navigate(['list']);
  }

}
