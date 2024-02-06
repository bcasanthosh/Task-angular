import { Component } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Task } from './../interface/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent{

  task: Task = {
    title: '',
    description: '',
    dueDate: new Date(),
    status: false,
  };

  constructor(private taskserviceService: TaskServiceService) {

  }
  

  addTask(): void {
    this.taskserviceService.addTask(this.task);
    this.resetForm();
  }


  private resetForm(): void {
    this.task = {
      title: '',
      description: '',
      dueDate: new Date(),
      status: false,
    };
  }
}
