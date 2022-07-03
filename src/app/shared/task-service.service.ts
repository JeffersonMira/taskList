import { Injectable } from '@angular/core';
import { Task, Status } from './task';
import {find, map, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [
    {id:0, title:"Study AWS", description:"Study to take the AWS certification", status: Status.NEW},
    {id:1, title:"Learn French", description:"Find some way to learn French faster", status: Status.NEW}
  ]
  idCounter: number = 2

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

  getTask(id : number): Observable<Task | undefined>{
    return this.getTasks().pipe(
     map( tasks => tasks.find( t => t.id == id))
    )
  }

  updateTask(updatedtask: Task){
    let indexToUpdate = this.taskList.findIndex(task => task.id == updatedtask.id)
    this.taskList[indexToUpdate] = updatedtask

    this.taskList.forEach(task => console.log(task))
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1)
  }

}
