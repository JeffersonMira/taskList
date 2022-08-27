import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '', component: TasksComponent, children: [
      { path: 'add', component: AddTaskComponent },
      { path: 'edit/:id', component: EditTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
