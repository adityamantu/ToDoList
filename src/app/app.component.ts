import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
   name="";

    tasks = new Array("Task1");

   addTask()
   {
     if(this.name=="")
       alert("Task not found")
       else
     this.tasks.push(this.name)
     this.name=""
   }

   deleteTask(task:number)
   {
    this.tasks.splice(task, 1);
   }
}


