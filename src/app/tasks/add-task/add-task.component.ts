import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css', '../tasks.component.css']
})
export class AddTaskComponent implements OnInit {

  //This is one way to declare the formGroup. I used the FormBuilder at editTask
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  }, {
    validators : this.controlTitleAndDescriptionAreEqual('title','description')
  });

  constructor(private taskService : TaskService,
    private router : Router) { }

  ngOnInit(): void { }

  addTask() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset();
      this.router.navigate(['../tasks']
     //,{relativeTo : this.route} not needed as I'm using the navegation ../
      );
    }
  }

  //Creating my own validator
  private controlTitleAndDescriptionAreEqual(controlNameA: string, controlNameB: string): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      const formGroup = control as FormGroup
      const valueOfControlA = formGroup.get(controlNameA)?.value
      const valueOfControlB = formGroup.get(controlNameB)?.value

      if(valueOfControlA == "" || valueOfControlB == "" || (valueOfControlA !== valueOfControlB)){
        return null
      }else{
        return { valuesAreEqual : true }
      }
    }
  }
}
