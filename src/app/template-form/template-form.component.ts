import { ServicedemoService } from './../servicedemo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private serv:ServicedemoService) { }

  ngOnInit(): void {
  }
  onSave(form){
    console.log(form.value)
    this.serv.postUser(form.value).subscribe(response =>{
      console.log(response)
    }
    )
  }

}
