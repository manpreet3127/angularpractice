import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesginutlityService {
private finaldata=[];
private apiurl="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  messageAlert(){
    alert("Thanks for Subscriber!!!")
  }
getData(){
  return this.http.get(this.apiurl);
}

//userName=new Subject<any>();
userName =new BehaviorSubject('john')
}
