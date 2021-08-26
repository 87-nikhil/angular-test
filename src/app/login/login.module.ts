import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
// import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { ToastrModule } from 'ngx-toastr';
@Injectable()

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxUiLoaderModule,
    // ToastrModule.forRoot({
    //   timeOut: 5000,
    //   closeButton:true,
    //   preventDuplicates: true,
    // }),
  ],
  providers: [],

})
export class LoginModule { }
