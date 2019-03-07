import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User1 } from '../User1';
import { Router} from '@angular/router';
import {SignUpFormService } from '../sign-up-form.service';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
  providers: [SignUpFormService]
})
export class SignupformComponent implements OnInit {


  constructor(private router: Router, private sign: SignUpFormService) { }
  signupform: FormGroup;
  // password: FormGroup;
  user: User1;
  arrUser: User1[] = new Array<User1>();
  ngOnInit() {
           this.signupform = new FormGroup({
      firstname: new FormControl('', [Validators.required/*, Validators.pattern('[a-zA-z]$')*/]),
      lastname: new FormControl('', [Validators.required/*, Validators.pattern('[a-zA-z]$')*/]),
      email: new FormControl('', [Validators.required/*, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')*/]),
      password: new FormGroup({
        password1: new FormControl('', [Validators.required, Validators.minLength(8)]),
        cpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),
      terms: new FormControl('', Validators.requiredTrue)
    });
  }
  formSubmit() {
    if (this.signupform.valid) {
    this.user = this.signupform.value;
   // this.sign.array = this.user;
   // console.log(this.sign.array);
    // this.arrUser.push(this.user);
    // this.sign.array = this.arrUser;
    // this.sign.loginData(this.user);
    this.sign.setUser(this.user);
    // console.log(this.sign.getdata());
  //  console.log(this.sign.savedata(this.user));
    this.router.navigate(['login']);
    // console.log(this.user);
    }
  }

}
