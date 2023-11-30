import { Injectable } from '@angular/core';
import { Task } from './taskmodel';

@Injectable({
  providedIn: 'root'
})
export class ServicetaskService {

  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    console.log(this.tasks)

  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    }
  }

  deleteTask(taskId: number): void {
    //this.tasks = this.tasks.filter((task) => task.id !== taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== null) {
      this.tasks.splice(index, 1); // Remove 1 item at the found index
    }
  
  }
}
