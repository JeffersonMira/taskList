import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideForStatusDirective } from './directives/hide-for-status.directive';
import {RedblackDirective} from "./directives/redblack.directive";



@NgModule({
  declarations: [
    HideForStatusDirective,
    RedblackDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideForStatusDirective,
    RedblackDirective
  ]
})
export class SharedModule { }
