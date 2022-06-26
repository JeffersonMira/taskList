import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/tasks', pathMatch: 'full' },
  { path : 'tasks',  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }, //loading lazylly. Only when enter in the url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
