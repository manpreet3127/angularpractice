import { Component, OnInit } from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { 
    
  }


  ngOnInit(): void {
  }
  userName="Default Value";
  
  clickMe(){
alert(this.userName);
  }
  }

