import { Component, OnInit } from '@angular/core';
import { Maintainance } from '../maintainance';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

 import { AddMaintainanceServiceService } from '../add-maintainance-service.service';
@Component({
  selector: 'app-add-maintainance-staff',
  templateUrl: './add-maintainance-staff.component.html',
  styleUrls: ['./add-maintainance-staff.component.css']
})
export class AddMaintainanceStaffComponent implements OnInit {
  maintainanceData: Maintainance[] = [];
  mid1: number;
  maintain = new Maintainance;
  constructor(private _maintainService: AddMaintainanceServiceService, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.downloadStaffInfo();
  //  this.data.currentMessage.subscribe(mid1 => this.mid1 = mid1);
  }
  downloadStaffInfo() {
    this._maintainService.downloadMaintainanceData().subscribe(res => { this.maintainanceData = res; });
  }
//    viewDetail(mid) {
// //     // tslint:disable-next-line:prefer-const
// //     // let result = this.maintainanceData.filter(function (maintainance) {
// //     //   return maintainance.mid === mid;
// //     // });
// //   //  console.log(mid);
// //  //   this._maintainService.mid = mid;
// //   //  console.log(this._maintainService.mid);
// //    this.router.navigateByUrl('/Details');
// // tslint:disable-next-line:prefer-const
//    let result = this.maintainanceData.filter(function (flatSale) {
//   return flatSale.mid === mid;
// });
//         this.data.m = result[0];
//         this.data.changeMessage(this.data.m);
//         this.router.navigateByUrl('/Details');
//   //   this.router.navigateByUrl('/Details');
//   }
  newMessage(mid1) {
    this.data.changeMessage(mid1);
    this.router.navigateByUrl('/Details');
  }
}
