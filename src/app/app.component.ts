import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  title = 'MyFirstAngularApp';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    }
constructor() {

}
}
