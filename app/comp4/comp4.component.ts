import { Component, OnInit } from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _designServices:DesginutlityService) { 
    this._designServices.userName.subscribe(uname=>{
      this.userName=uname
    })

  }


  ngOnInit(): void {
  }
  userName;
  updateUserName(uname){
    this._designServices.userName.next(uname.value);
  }
  }
