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

  constructor() { }

  ngOnInit(): void {
  }

  removeThisTask(index : number){3
    this.removeTask.emit(index);
  }

}
