import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  title = 'TODO list';
  taskList: Task[] = []


  constructor(private taskService : TaskService){
    console.log("This module is loaded")
  }

  ngOnInit(): void {
    this.refreshList()
  }

  removeTask(index: number) {
    this.taskService.removeTask(index)
  }

  // It is not needed because the getTasks returns an observable, so each change done in the list of tasks
  // that is done is propagated to its subscribers - in this case the getTasks from task-list component
  refreshList() {
    this.taskService.getTasks()
      .subscribe(t => this.taskList = t);
  }
}
