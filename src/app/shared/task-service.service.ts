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

  getTask(i : number): Observable<Task>{

    //TODO need implementation
    return new Observable; 
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1)
  }

}
