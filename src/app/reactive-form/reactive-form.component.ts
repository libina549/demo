import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4),CustomValidators.checkSpace]),
    password:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email])
 
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.form)
  }

}
