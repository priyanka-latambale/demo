import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Maintainance } from './maintainance';
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(mid: number) {
    this.messageSource.next(mid);
  }
}
