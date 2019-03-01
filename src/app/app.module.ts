import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import { ModelformComponent } from './modelform/modelform.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { SearchService } from './search.service';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SignUpFormService } from './sign-up-form.service';
import { TrialComponent1Component } from './trial-component1/trial-component1.component';
import { TrialComponent2Component } from './trial-component2/trial-component2.component';
import { TrialService } from './trial.service';
import { AddMaintainanceStaffComponent } from './add-maintainance-staff/add-maintainance-staff.component';
import { AddMaintainanceServiceService } from './add-maintainance-service.service';
import { MaintainanceDetailsComponent } from './maintainance-details/maintainance-details.component';
import { DataService } from './data.service';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserloginComponent,
    MainpageComponent,
    SignupformComponent,
    ModelformComponent,
    MyServiceComponent,
    ServiceDetailsComponent,
    SearchfilterPipe,
    TrialComponent1Component,
    TrialComponent2Component,
    AddMaintainanceStaffComponent,
    MaintainanceDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: UserloginComponent
    },
      {
        path: 'app-mainpage',
        component: MainpageComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'app-user',
        component: UserComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'signup',
        component: SignupformComponent,
       // canActivate: [AuthGuard]
      },
      {
       path: 'modelform',
       component: ModelformComponent,
      // canActivate: [AuthGuard]
      },
      {
        path: 'service',
        component: MyServiceComponent,
      //  canActivate: [AuthGuard]
      },
      {
        path: 'post/:id',
        component: ServiceDetailsComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'trialComponent1',
        component: TrialComponent1Component,
       // canActivate: [AuthGuard]
      },
      {
        path: 'trialComponent2',
        component: TrialComponent2Component,
       // canActivate: [AuthGuard]
      },
      {
        path: 'displayMaintainance',
        component: AddMaintainanceStaffComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'Details',
        component: MaintainanceDetailsComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'Modal',
        component: ModalComponent,
       // canActivate: [AuthGuard]
      }
    ]),
    ReactiveFormsModule

  ],
  // tslint:disable-next-line:max-line-length
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService, AuthGuard, CookieService, SearchService, SignUpFormService, AuthService, TrialService, AddMaintainanceServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
