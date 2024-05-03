import { Component, OnInit, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';
import { Observable , tap} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableModule, ButtonModule, HttpClientModule],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  private readonly taskSerivce = inject(TaskService);

  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.taskSerivce.getTasks().pipe(
    ).subscribe({
      next: value => {
        this.tasks = value
        console.log('tasks', value)
      }
    });
  }
}
