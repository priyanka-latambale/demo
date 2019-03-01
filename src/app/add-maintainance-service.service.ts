import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Maintainance } from './maintainance';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Injectable()
export class AddMaintainanceServiceService {
  mid: number;
  headers: Headers;
  options: RequestOptions;
  baseUrl: String = 'http://192.168.0.108:8086/demo';

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json',
    });
    this.options = new RequestOptions({ headers: this.headers });
  }
  downloadMaintainanceData() {
    return this.http.get(this.baseUrl + '/displayMaintainance' , this.options)
        .map(res => res.json());
}
// getById(id: Number): Observable<Maintainance[]> {
//   return this.downloadMaintainanceData()
//    .pipe(map( data => data.find(post => post.id === id)))
//    .catch(this.handleError);
//    // return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)

// }
// private handleError(error: Response) {
//   return Observable.throw(error.statusText);
// }

downloadMaintainanceDataById(mid: Number) {
return this.http.get(this.baseUrl + '/displayMaintainanceById?mid=' + mid, this.options)
.map(res => res.json());
}
}
// 'Access-Control-Allow-Origin': '*',  'Access-Control-Allow-Headers': 'Content-Type, Accept'
