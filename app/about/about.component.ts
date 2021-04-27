import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 value='This is test value';
 date=new Date();
 nameSearch:string='';
 ProductArr:any[]=[
   {
     sno:1,
    name:'Laptop',
    price:30000,
    availablity:'Available'
  },
  {
    sno:2,
   name:'Television',
   price:50000,
   availablity:' Not Available'
 },
 {
  sno:3,
 name:'Mobile',
 price:15000,
 availablity:'Available'
},
{
  sno:4,
 name:'washing Machine',
 price:35000,
 availablity:'Not Available'
}

 
 ]
 onAddProduct(add){
   this.ProductArr.push({
    sno:5,
    name:add.value,
    price:35000,
    availablity:'Not Available'
   })
 }
}
