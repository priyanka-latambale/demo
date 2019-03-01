import { Component, OnInit } from '@angular/core';
import { IPosts } from '../posts';
import { ApiService } from '../api.service';
import { Routes, Router, RouterModule, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Http} from '@angular/http';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
  providers: [ApiService]
})
export class ServiceDetailsComponent implements OnInit {
   postss: IPosts[];
  id;
  constructor(private apiservice: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //      (params: Params) => {
    //        this.id = params.id; // get the id from the route
    //        this.getWhipById(this.id);
    //      }
    //    );
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.apiservice.getById(id).subscribe(post => {this.postss = post; console.log('posts:' , this.postss); }) ;

  });
  }
  // getWhipById(id: number) {
  //   console.log ( id );
  //   // console.log ( this.productService.getById(id) );

  //   // this.productService.get().map(
  //   //   res => {
  //   //     return res.filter(item => item.id === id)[0];
  //   //   });
  //   this.apiservice.getById()
  // .map(res => res.json().filter(item => item.id === id))
  // .subscribe(resp => console.log(resp));
  // }
  back() {
    this.router.navigate(['service']);
  }
}
