import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { IPosts } from './posts';
import 'rxjs/add/operator/filter';
@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchfilterPipe implements PipeTransform {
str: string[];
value1: IPosts[];
result;
  // transform(value: any, args?: any): any {
  //   return null;
  // }
  // transform(value: any[], term: string): any[] {
  //   if (value && value.length) {
  //     return value.filter(item => {
  //         if (term && item.title.toLowerCase().indexOf(term.toLowerCase()) === -1) {
  //             return false;
  //         }
  //         return true;
  //    });
  // } else {
  //   return value;
  // }
  // //   if (!value) { return []; }
  // //   return value.filter(it => {
  //     //  for (let i = 0; i < this.value1.length; i++) {
  //     //           this.str[i] = this.value1[i].title;
  //     // }
  //     // this.result = this.str.match()
  // //    });
  // }

  transform(value: any[], term: string): any[] {
    if (!term) {
      return value;
    }

  //  console.log(value);
    return value.filter(function(item) {
     // console.log('Item:', item);
     return item.title.toLowerCase().includes(term.toLowerCase());

    });
    // console.log('Data' , data);
   // console.log(value);


}
// tslint:disable-next-line:eofline
}