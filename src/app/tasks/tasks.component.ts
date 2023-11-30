import { Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { Task } from '../taskmodel';
import { ServicetaskService } from '../servicetask.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule,TasksComponent,HomeComponent,ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '' };
  selectedTask: Task | null = null; // Track the selected task for update


  constructor(private taskService: ServicetaskService) {}
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    this.taskService.addTask({ ...this.newTask, id: this.tasks.length + 1 });
    this.newTask = { id: 0, title: '', description: '' };
  }


}
