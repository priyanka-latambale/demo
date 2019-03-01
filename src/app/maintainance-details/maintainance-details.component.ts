import { Component, OnInit } from '@angular/core';
import { AddMaintainanceServiceService } from '../add-maintainance-service.service';
import { DataService } from '../data.service';
import { Maintainance } from '../maintainance';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-maintainance-details',
  templateUrl: './maintainance-details.component.html',
  styleUrls: ['./maintainance-details.component.css'],
  providers: [AddMaintainanceServiceService]
})
export class MaintainanceDetailsComponent implements OnInit {
  maintainanceData: Maintainance[] = [];
  maintainace = new Maintainance;
  // maintain = new Maintainance;
  mid1: number;
  constructor(private _maintainService: AddMaintainanceServiceService, private data: DataService) {
    console.log(this._maintainService.mid);
  }

  ngOnInit() {
    // this.maintain = this.data.m;
    // if (this.maintain != null) {
    //   const mid = this.maintain.mid;
    //   this._maintainService.downloadMaintainanceDataById(mid).subscribe(data => {


    //       this.maintainanceData = data;

    //   });
    // }
    this.data.currentMessage.subscribe(mid1 => this.mid1 = mid1);
    // console.log(this.maintain);
    // this.maintainace = this._maintainService.mid;
    //  const mid = this._maintainService.mid;
    //  console.log(mid);
      this._maintainService.downloadMaintainanceDataById(this.mid1).subscribe((res => { this.maintainanceData = res; }));

  //   this._maintainService.downloadMaintainanceDataById(id).subscribe(res => { this.maintainanceData = res; });
  // });

}
}
