import {Injectable} from '@angular/core';
 import {Http, Response} from '@angular/http';
 import {Observable} from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 import {IModel} from './model';
 import { map } from 'rxjs/operators';
 import { ModelformComponent} from './modelform/modelform.component';
  @Injectable()
 export class ModelService {
 // private _postsURL = 'https://jsonplaceholder.typicode.com/posts';
 constructor(private http: Http) {
     }
 getData(): Observable<IModel[]> {
         return this.http
             .get('')
             .map(response => response.json())
             .catch(this.handleError);
     }
 private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 // tslint:disable-next-line:eofline
 }