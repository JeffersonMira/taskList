import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideForStatusDirective } from './directives/hide-for-status.directive';
import {RedblackDirective} from "./directives/redblack.directive";
import { TaskStatusPipePipe } from './pipes/task-status-pipe.pipe';



@NgModule({
  declarations: [
    HideForStatusDirective,
    RedblackDirective,
    TaskStatusPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideForStatusDirective,
    RedblackDirective,
    TaskStatusPipePipe
  ]
})
export class SharedModule { }
