import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import {IPosts} from '../posts';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SearchService } from '../search.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { SearchfilterPipe } from '../searchfilter.pipe';
@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css'],
  providers: [ApiService, SearchfilterPipe]
})
export class MyServiceComponent implements OnInit {
  postArray: IPosts[];
  // results: any[] = [];
  // tslint:disable-next-line:no-inferrable-types
  query: string = '';
  // tslint:disable-next-line:no-inferrable-types
  dataDisplay: boolean = false;
    queryField: FormControl = new FormControl();
  constructor(private apiservice: ApiService, private router: Router,
    private searchservice: SearchService, private searchfilter: SearchfilterPipe) { }

  ngOnInit() {
    this.getData();
    // this.getDataByid();
  //    this.queryField.valueChanges
  //    .subscribe( result => console.log(result));

  //   this.queryField.valueChanges
  //   .debounceTime(200)
  //   .distinctUntilChanged()
  //   .switchMap((query) =>  this.searchservice.search(query))
  //   // .subscribe(queryField => this.searchservice.search(queryField)
  //  // .subscribe(response => this.results = response.json().artists.items));
  //  .subscribe( result => { if (result.status === 400) { return; } else {
  //    this.results = result.json().artists.items; }
  // });

  }
  //  getDataByid(id) {
  //      this.apiservice.getPostsByid(+params.get)
  //      .subscribe(Data => {
  //     this.postArray = Data;
  //       console.log(this.postArray);
  //   //     // const x = this.postArray[0].body;
  //   //     // console.log(x);
  //     }
  viewDetail(id) {
    // tslint:disable-next-line:no-inferrable-types
    // const url: string = '/post' + id;
    this.router.navigate(['/post', id]);
    console.log(id);
  }

  doSomething() {
    this.dataDisplay = true;
  }

  getData() {
   this.apiservice.getPosts()
   .subscribe(Data => {
     this.postArray = Data;
     console.log(this.postArray);
  //     // const x = this.postArray[0].body;
  //     // console.log(x);
     },

       // tslint:disable-next-line:semicolon
       error => console.log('Error:' + error))}

   // tslint:disable-next-line:eofline
   }