import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { Task } from '../taskmodel';
import { ServicetaskService } from '../servicetask.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule,TasksComponent,HomeComponent,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '' };
  selectedTask: Task | null = null; // Track the selected task for update

  constructor(private taskService: ServicetaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  
  updateTask(task: Task): void {
    if (this.selectedTask) {
      this.taskService.updateTask(task);
      this.selectedTask = null; // Reset selected task after updating
    } else {
      this.selectedTask = { ...task }; // Set selected task for update
    }
   
  }

  deleteTask(taskId: number): void {
    alert("Task Deleted")
    console.log(taskId)
   this.taskService.deleteTask(taskId);
  }


}
