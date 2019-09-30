import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-app';
  todoList = [];
  // a = {} ;
  addVal(value:string) {
    console.log(value);
    this.todoList.push({val:value,state:"notdone"});
    console.log(this.todoList.length);
  }
  deleteItem(index){
    this.todoList.splice(index, 1);
    // console.log(index);
  }

  commpletedItem(item){
    console.log(item);
    this.todoList[item].state = "done";
    // this.todoList[item] = '.btndone'
  }
  
  




  // add(){
  //   var todoList =[];
  //   var todo = document.getElementById("main-text")
  //   var u = document.getElementById("rows");
  //   var list = document.createElement("li");
  //   var btndl = document.createElement("button");
  //   btndl.className = "btn1"
  //   var btnst = document.createElement("button");
  //   // var listvalue = document.createTextNode(todoList);
  //   todoList.push(todo.value)
  //   todoList.forEach(function(x){
  //     console.log(x);
  //   });
  //   console.log(todoList.length);
  //   btndl.textContent = "Delete";
  //   btnst.textContent = "Done";
  //   console.log(todoList);
  //   list.textContent = todoList;
  //   // l.appendChild(listvalue);
  //   u.appendChild(list);
  //   list.appendChild(btndl);
  //   list.appendChild(btnst)
  //   btndl.addEventListener("click",function(){
  //     // console.log(para);
  //     list.style.display="none"
  //   })
  //   btnst.addEventListener("click",function(){
  //     list.style.textDecoration="line-through";
  //   })
  //   todo.value = "";
  //   }
}
