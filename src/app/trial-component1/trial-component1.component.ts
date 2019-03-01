import { Component, OnInit } from '@angular/core';
import { TrialService } from '../trial.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-trial-component1',
  templateUrl: './trial-component1.component.html',
  styleUrls: ['./trial-component1.component.css']
})
export class TrialComponent1Component implements OnInit {

  constructor(private _trial: TrialService, private router: Router) { }

  ngOnInit() {
    this.onSubmit();
  }
  onSubmit() {
    this._trial.setUser(1);
    console.log(this._trial.setUser(1));
    this.router.navigate(['trialComponent2']);
}
}
