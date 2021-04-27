import { Component, OnInit } from '@angular/core';
import {MessageService} from '../appServices/message.service';
import { DesginutlityService } from '../appServices/desginutlity.service';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService:DesginutlityService) { }

  ngOnInit(): void {
    //this.product=this._msgService.product;
  }
  btnClick(){
     this._msgService.messageAlert();
  }
  product="test"
}
