import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  errormsg: string;
  iserror: boolean;
  constructor(private fb: FormBuilder, private router: Router,
              private authservice: AuthService, private commonservice: CommonService) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.iserror = false;
    // this.errormsg = 'test';
  }

  login() {
    console.log(this.LoginForm.value);
    this.authservice.login(this.LoginForm.value).subscribe(
      res => {
        console.log('success');
        // console.log(res);
        console.log(this.commonservice.UserLogin);
        // this.router.navigate(['/home/' + this.commonservice.UserLogin]);
        this.router.navigate(['/home']);
      }, err => {
        this.iserror = true;
        this.errormsg = err;
        console.log(err);
      }
    );
  }

}
