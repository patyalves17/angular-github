import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLIENT_ID } from '../constants';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string='';
  loginForm: FormGroup;

  code:string='';
  loading:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private route:Router, 
    private router:ActivatedRoute,
    private authService:AuthService,
    private userService:UserService) { }

  ngOnInit() {
    console.log("LoginComponent");
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });

    this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          this.route.navigate(['list']);
        } 
      })

    

    this.router.queryParams.subscribe(params=>{
      this.code=params['code'];
      if(this.code){
        this.loading=true;
        this.authService.getAccessToken(this.code).subscribe(token=>{
          this.route.navigate(['list']);
        },error=>{
          this.loading=false;
          this.route.navigate(['']);
        });
      }
    });
  }

  doLogin() {
    let email=this.loginForm.get('email').value;
    window.location.href = `https://github.com/login/oauth/authorize?login=${email}&client_id=${CLIENT_ID}`;
  }

}
