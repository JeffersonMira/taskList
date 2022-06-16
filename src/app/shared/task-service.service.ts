import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = []

  constructor() { }

  addTask(task: Task){
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
