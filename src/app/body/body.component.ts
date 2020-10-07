import { ServicedemoService } from './../servicedemo.service';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  
  // constructor(private http:HttpClient){
    // this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response =>{
    //   console.log(response)
// }
   data:any;
   constructor(private serv:ServicedemoService){
    

  }

  ngOnInit() {
    this.serv.getPosts().subscribe(response => {
      this.data=response
      console.log(this.data)
    
    
  })

  }
}
