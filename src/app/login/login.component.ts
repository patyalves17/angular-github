import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLIENT_ID } from '../constants';

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
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });

    this.router.queryParams.subscribe(params=>{
      this.code=params['code'];
      console.log(this.code);

      if(this.code){
        console.log("entrou no if");
        this.authService.getAccessToken(this.code).subscribe(token=>{
          console.log(token);
          
          this.route.navigate(['list']);
        },error=>{
          console.log("error");
        });
      }
    });
  }

  doLogin() {
    let email=this.loginForm.get('email').value;
    window.location.href = `https://github.com/login/oauth/authorize?login=${email}&client_id=${CLIENT_ID}`;
  }

}
