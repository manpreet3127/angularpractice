import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
//@ViewChild('myForm')myForm:NgForm
  constructor() { }
  emailid;
  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ])),
    //passwd:new FormControl("") 
    passwd: new FormControl("", this.passwordvalidation)
    });
    }
    passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
    return {"passwd" : true};
    }
    }
    onClickSubmit(data) {this.emailid = data.emailid;}
   }