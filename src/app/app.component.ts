import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // count=0
  // data=[{
  //   title: "realme 7",
  //   price:18000
  // },
  // {
  //   title: "MI A3",
  //   price:24000
  // }]


  // title = "hi";

  // title = 5;
  // state=false
  // list=[1,2,3,4,5]
  // viewMode ="grid";

  //  btnClass;


  //  btnClass={
  //    active:false
  //  }

  // btnClass={
  //   active:this.viewMode=="list"
  // }

  // size=25;
  // // size=25.459
  // created = new Date()

  // btnStyle={
  //   fontSize:`${this.size}px`
  // }


  // constructor(){
    // setInterval(()=>{
    //   this.title++
    // },1000)
  // }


  // changeState(){
  //   this.state=!this.state
  // }

  // setList(){
  //   this.viewMode="list"
  //   // this.btnClass.active=true
  // }
  // setGrid(){
  //   // this.btnClass.active=false
  //   this.viewMode="grid"
  // }

  // incrementFontSize(){
  //   this.size++
  //   this.btnStyle.fontSize=`${this.size}px`
  // }


  // changeTitle(e){
  //   // console.log(e.value)
  //   this.title=e.value

  // }

  // eventTriggered(value){
  //   console.log(value)
  //   if(value=="added"){
  //     this.count++
  //   }
  //   else{
  //     this.count--
  //   }
  // }


  items = []; 
  newTask; 
  completedTask;

  addToList() { 
      if (this.newTask == '') { 
      } 
      else { 
          this.items.push({task:this.newTask,completed:false}); 
          this.newTask = ''; 
      } 
  } 


  deleteTask(index) { 
      this.items.splice(index, 1); 
  }
  
  move(index){
   
    
    this.items[index].completed = !this.items[index].completed;
    console.log(this.items)
    
   
  }



}
