import { Component, OnInit } from '@angular/core';
import { TrialService } from '../trial.service';
@Component({
  selector: 'app-trial-component2',
  templateUrl: './trial-component2.component.html',
  styleUrls: ['./trial-component2.component.css']
})
export class TrialComponent2Component implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  userId: number = 0;
  constructor(private _trial: TrialService) { }
  ngOnInit() {
    this.getUser();
 }
  getUser() {
    this._trial.currentUser.subscribe(user => {
      this.userId = user;
      console.log(this.userId);
    }, err => {
      console.log(err);
    });
  }

}
