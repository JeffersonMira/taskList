import { Injectable } from '@angular/core';
import { Task, Status } from './task';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = []
  idCounter: number = 0;

  constructor() { }

  addTask(task: Task){
    task.id = this.idCounter++;
    task.status = Status.NEW
    this.taskList.push(task)
  }

  getTasks(): Observable<Task[]>{
    const tasks = of(this.taskList)
    return tasks
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1)
  }

}
