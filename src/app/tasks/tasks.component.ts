import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  title = 'TODO list';
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  
  constructor(private taskService : TaskService){ }

  addTask() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset();
    }
  }

  removeTask(index: number) {
    this.taskService.removeTask(index)
  }

  listTasks() {
    var taskList: Task[] = []
    this.taskService.getTasks()
      .subscribe(t => taskList = t);

    return taskList;
  }
}
