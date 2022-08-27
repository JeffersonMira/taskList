import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import {TaskListComponent} from "./task-list/task-list.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent,
    ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    //this guy is used to FormGroup etc...
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TasksModule { }
