import { Pipe, PipeTransform } from '@angular/core';
import {Status} from "../task";

@Pipe({
  name: 'taskStatusPipe'
})
export class TaskStatusPipePipe implements PipeTransform {

  transform(value: Status): String {
    console.log("value before : "+  value)
    console.log("value after : "+this.camelize(value))
    return this.camelize(value);
  }

  private camelize(str: string) {
    return str ? str.charAt(0).toUpperCase() + str.substr(1).toLowerCase() : '';
  }
}
