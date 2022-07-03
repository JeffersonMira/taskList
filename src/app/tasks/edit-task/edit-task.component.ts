import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Status } from 'src/app/shared/task';
import { TaskService } from 'src/app/shared/task-service.service';
import {first} from "rxjs";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskForm: FormGroup
  id: number

  status = Status;
  statusKeys : String[] = []

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService) {
      this.statusKeys = Object.keys(this.status)
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['']
    });

    //Inserting the value into page's form
    this.service.getTask(this.id).subscribe( data => { console.log(data); data != undefined ? this.taskForm.patchValue(data): ""});
  }

  editTask() {
    this.service.updateTask(this.taskForm.value);
    this.taskForm.reset();
    this.router.navigate(['../tasks'])
  }

}
