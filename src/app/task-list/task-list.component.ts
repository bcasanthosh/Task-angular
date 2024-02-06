import { Component, OnInit, Pipe } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';

import { pipe } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit  {

  constructor(private taskServiceService:TaskServiceService){}
  tasks:any = [];

  ngOnInit():void{
    this.tasks = this.taskServiceService.getTasks();
  }

  editTask(index: number): void {
    // Implement edit functionality
  }

  deleteTask(index: number): void {
    this.taskServiceService.deleteTask(index);
  }
}
