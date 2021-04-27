import { Component, OnInit } from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';
import {MessageService} from '../appServices/message.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  constructor(private _msgService:DesginutlityService) { }
   public persondata=[];
     ngOnInit(): void {
      this._msgService.getData().subscribe((data)=>{
        this.persondata=Array.from(Object.keys(data),k=>data[k]);
        console.log(this.persondata);
    
      });
  }
  btnClick(){
     this._msgService.messageAlert();
  }
  
}
