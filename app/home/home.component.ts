import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild ,Input} from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';
import { Comp2Component } from '../comp2/comp2.component';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit{
  userName="manpreet";
  @ViewChild('box') box:ElementRef;

  @ViewChild(Comp2Component) child:Comp2Component;
  constructor() { 
  }
 @HostListener('click') myClick(){
alert("clicked");
 }
ngOnInit(): void {
  console.log(this.box)
  $(window).scroll(function(){
  console.log('scrolling')
  })
  }
ngAfterViewInit(){
  console.log(this.box);
  this.box.nativeElement.style.backgroundColor="blue";
  this.box.nativeElement.classList="boxblue";
  //this.box.nativeElement.innerHTML="this is modifed element"

}
changeChildProperty(){
this.child.userName="multani"
}
callChildMethod(){
this.child.clickMe()
}
}