import {Injectable} from '@angular/core';
 import {Http, Response} from '@angular/http';
 import {Observable} from 'rxjs/Observable';
//  import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 import {IPosts} from './posts';
 import { map } from 'rxjs/operators';
import { ModelformComponent } from './modelform/modelform.component';
// import { HttpClient } from '@angular/http';
import 'rxjs/add/observable/of';

  @Injectable()
 export class ApiService {
 // private _postsURL = 'https://jsonplaceholder.typicode.com/posts';
// post: Observable<any>;
// posts: IPosts[];
 constructor(private http: Http) {
     }
 getPosts(): Observable<IPosts[]> {
         return this.http
             .get('https://jsonplaceholder.typicode.com/posts')
             .pipe(map(response => response.json()))
             .catch(this.handleError);
     }
    //  getAll() {
    //     return Observable.of(this.post);
    //   }
     getById(id: Number): Observable<IPosts[]> {
         return this.getPosts()
          .pipe(map( posts => posts.find(post => post.id === id)))
          .catch(this.handleError);
          // return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)

      }
 private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 // tslint:disable-next-line:eofline
 }