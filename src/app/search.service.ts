import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
// tslint:disable-next-line:no-inferrable-types
id: string = '1';

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:4200/post/' + this.id;
  constructor(private http: Http) { }
  search(queryString: string) {
    // tslint:disable-next-line:prefer-const
    let URL = this.baseUrl + queryString;
    return this.http.get(URL);
}
}
