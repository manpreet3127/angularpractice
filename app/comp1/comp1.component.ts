import { Component, OnInit,Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { DesginutlityService } from '../appServices/desginutlity.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy{

  constructor() { 
    console.log('constructor called...!!')
  }
    @Input() myValue="multani"

  ngOnChanges(changes:SimpleChanges){
    
    console.log('ngOnChanges called'+ ' ' + changes.myValue.currentValue)
  }
  ngOnInit(): void {   
    console.log('ngOnInit called...!!')

  }
  ngDoCheck(){
    console.log('ngDoCheck called...!!')
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called...!!')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called...!!')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called...!!')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called...!!')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called...!!')
  }
}

