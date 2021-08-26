import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private loginService: LoginService,private toastr: ToastrService,private route : Router) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile: ["", Validators.required],
      password: ["",Validators.required],
    });
  }

  onKeyPressNumber(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true
  }

  onSubmit(data) {
    if (this.loginForm.valid) { 
      let logingSucess = this.loginService.login(data)
      if(logingSucess) {
        this.toastr.success("Login successful!");
        this.route.navigate(["data"]);
      }
      else {
        this.toastr.error("invalid Mobile and password!");
      }
    }
  }


}
