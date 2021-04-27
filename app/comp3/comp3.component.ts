import { Component, OnInit } from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
