import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string='';
  loginForm: FormGroup;

  code:string='';

  constructor(
    private formBuilder: FormBuilder,
    private route:Router, 
    private router:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

    this.router.queryParams.subscribe(params=>{
      console.log(params);
      this.code=params['code'];
      console.log("this.code -->",this.code);
      
    });

  }

  doLogin() {
    console.log("doLogin");
    let email=this.loginForm.get('email').value;
    let password=this.loginForm.get('password').value;

    window.location.href = `https://github.com/login/oauth/authorize?login=${email}&client_id=6e3eb5c724196e917235`;



    //returned this http://localhost:4200/?code=c804cb7144e243dbd80a
    // console.log("doLogin");

    // let userName=this.loginForm.get('username').value;
    // let password=this.loginForm.get('password').value;

    // this.authService.login(userName, password);
    // this.route.navigate(['list']);
  }

}
