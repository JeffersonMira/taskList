import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input('taskList') taskList: Task[] = [];
  @Output() removeTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeThisTask(index : number){
    this.removeTask.emit(index);
  }

  editThisTask(index : number){
    this.editTask.emit(index);
  }

}
