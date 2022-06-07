import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../shared/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  title = 'TODO list';
  taskForm = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('')
  });

  taskList: Task[] = []

  addTask(){
    this.taskList.push(this.taskForm.value);
  }

  removeTask(index : number){
    console.log("parent")
    this.taskList.splice(index, 1)
  }

}
