import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string='';
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route:Router, 
    private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  doLogin() {
    console.log("doLogin");

    let userName=this.loginForm.get('username').value;
    let password=this.loginForm.get('password').value;

    this.authService.login(userName, password);
    this.route.navigate(['list']);
  }

}
