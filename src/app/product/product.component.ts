import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() title;
 @Input() price;
 @Output() change= new EventEmitter();

//  added=false;

  // title="realme 7";
  // price=18000;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.change.emit("added")
  }
  rmFromCart(){
    this.change.emit("removed")
  }


}
