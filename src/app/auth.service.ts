import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { Router } from '@angular/router';
// const stringify = require('json-stringify-safe');


@Injectable(
)
export class AuthService {
  private authState: AuthState;
  private authManager: BehaviorSubject<AuthState>;

  public  authChange$: Observable<AuthState>;

  constructor(private router: Router) {
  //  console.log('Behaviour Subject'  +  this.authManager.getValue());
    this.authManager = new BehaviorSubject(AuthState.LOGGED_OUT);
    this.authChange$ = this.authManager.asObservable();
    this.authChange$
      .filter((authState: AuthState) => authState === AuthState.LOGGED_IN)
      .map(   (authState: AuthState) => Observable.timer(SESSION_TIMEOUT))
      .do(    () =>
        console.log('Logged In. Session Timout counting down from now'))
      .switch()
      .subscribe( () => {console.log('Timer ended: Logging out');
                         this.logout();
                        });

  }

   logout(): void {
     localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    this.setAuthState(AuthState.LOGGED_OUT);
    this.router.navigate(['/login']);
   }


  login() {
    this.setAuthState(AuthState.LOGGED_IN);
  }
  // logout() {
  //   this.setAuthState(AuthState.LOGGED_OUT);
  // }
  emitAuthState(): void {
    // tslint:disable-next-line:prefer-const

   // tslint:disable-next-line:prefer-const
  // let val = this.authManager;
  //  console.dir('Before: ' + JSON.stringify(val));
     this.authManager.next(this.authState);
  //   console.log('In Authmanager Data' + this.authManager.next(0));
    // tslint:disable-next-line:prefer-const
    // let val1 = this.authManager;
    // console.dir('After: ' + val1);
  }

  private setAuthState(newAuthState: AuthState): void {
    console.log('AuthService: setAuthState: ',
        AuthState[newAuthState.toString()]);
       // console.log(AuthState);
         console.log('Before: ' + this.authState);
    if (newAuthState !== this.authState) {
      this.authState = newAuthState;
      // console.log('After: ' + this.authState);
      this.emitAuthState();
    }
  }
}
  export enum AuthState {
    LOGGED_IN,
    LOGGED_OUT
  }
  const SESSION_TIMEOUT = 100000;

// tslint:disable-next-line:eofline
