import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  users = [];
  onCreateUser(uname){
    this.users.push({
      name:uname.value
    });
    if(this.users.length>3){
      //alert("more then three")
      this.router.navigate(['product'])
    }
  }
  onRemoveUser(uname){
    this.users.splice(this.users.length -1)
  }
  onRemoveItem(item){
    this.users.splice(item,1)
  }
}
