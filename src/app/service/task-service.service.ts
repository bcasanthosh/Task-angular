import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  editTask(index: number, task: Task): void {
    this.tasks[index] = task;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
