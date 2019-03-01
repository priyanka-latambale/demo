import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators} from '@angular/forms';
import { ILogin } from '../login';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { User1 } from '../User1';
import {SignUpFormService} from '../sign-up-form.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [AuthService , SignUpFormService]
})
export class UserloginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
//  model: ILogin = { email: 'priya@gmail.com', pwd: 'admin123' };
  model: User1;
  current: any;
  modelArray: User1[] = new Array<User1>();
 // modelArray1 = this.sign.getData();
  constructor(private router: Router, public authService: AuthService, private cookieService: CookieService,
     private sign: SignUpFormService) { }
  formdata: FormGroup;
  ngOnInit() {
   // console.log(this.sign.array);
 //  console.log(this.sign.array1);
  //  this.getUser();
  //  console.log(this.getUser());

    this.cookieService.set( 'Test', 'Hello World', 2 );
    this.cookieValue = this.cookieService.get('Test');
    const value: string = this.cookieService.get('test');
    console.log(value);
    this.form();
  }

  form() {
    this.formdata = new FormGroup({
      email: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(6)
      ])),
      password: new FormControl('', this.passwordvalidation)
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {'pwd' : true};
   }

  }

  onClickSubmitData(data1) {
   // console.log(data.email);
   // this.authService.login();
      // console.log(data);
     // this.model = this.formdata.value;
    //  console.log(this.sign.getdata());
    //  this.modelArray1 = this.sign.getdata();
    //  console.log(this.modelArray1);
    // for (let i = 0; i < this.modelArray1.length; i++) {
    //  // console.log(data1.pwd);
    // //  console.log(this.modelArray);
    //  if (data1.email === this.modelArray1[i].email && data1.password === this.modelArray1[i].password.password1) {
    //    alert('Login successful');
    //  // tslint:disable-next-line:prefer-const
    //  localStorage.setItem('isLoggedIn', 'true');
    //  // tslint:disable-next-line:prefer-const
    //    localStorage.setItem('token', data1.email);
     // this.sign.array = 10;
     // console.log(this.sign.array);
      this.router.navigateByUrl('/app-mainpage');
      //  this.router.navigate(['/app-mainpage']);
    //  } else {
    //    alert('Invlid Login');
    //    return false;
    //  }
  //  }
  }

  //  getUser() {
  //    this.sign.currentUser.subscribe(user => {
  //      this.modelArray = user;
  //    console.log(this.modelArray);
  //    }, err => {
  //      console.log(err);
  //    });
  // }
  }

