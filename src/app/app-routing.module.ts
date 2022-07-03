import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // { path: '', redirectTo:'/tasks', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path : 'tasks',  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }, //loading lazylly. Only when enter in the url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
