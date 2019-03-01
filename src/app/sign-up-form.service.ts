import { Injectable } from '@angular/core';
import { User1 } from './User1';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class SignUpFormService {
 //   private array = new BehaviorSubject<User1>();
   // currentUser = this.array.asObservable();
  private array1: User1[] = new Array<User1>();
  array2: any;
 // array2: User1[] = new Array<User1>();
  // array1 = this.array;

  constructor() {}
  public setUser(user: User1) {
     this.array1.push(user);
 // this.currentUser = this.array.next(user);
    console.log(this.array1);
  }
// loginData(userData: User1) {
//   this.array.push(userData);
//   console.log('service getdata array' , this.array);
// }
public getData(): Array<User1> {
   // console.log('Service Array:' + this.array);
   // tslint:disable-next-line:prefer-const

   // tslint:disable-next-line:prefer-const
   return this.array1;
  //  console.log(array2);
  //  return array2;


 }
}
