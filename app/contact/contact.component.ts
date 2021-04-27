import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string;
  comp1Exist:boolean=true;
  SubmitValue(val){
   this.value = val.value;
  }
  destroy(){
    this.comp1Exist=false;
  }
}
