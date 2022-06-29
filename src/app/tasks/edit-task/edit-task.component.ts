import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/shared/task';
import { TaskService } from 'src/app/shared/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskForm: FormGroup
  id: string
  
  status = Status;
  statusKeys : String[] = []

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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

    this.service.getTasks
  }

  editTask() {

  }

}
