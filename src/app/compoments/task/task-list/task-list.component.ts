import { Component, OnInit, inject } from '@angular/core';
import {
  TableModule,
  TableRowCollapseEvent,
  TableRowExpandEvent,
} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  private readonly taskSerivce = inject(TaskService);

  tasks: Task[] = [];

  constructor() {}
  expandedRows: { [s: string]: boolean } = {};

  ngOnInit(): void {
    this.loadTasks();
  }
  onRowExpand($event: TableRowExpandEvent) {
    console.log('Row expanded:', $event.data);
  }
  onRowCollapse($event: TableRowCollapseEvent) {
    console.log('Row collapsed:', $event.data);
  }
  collapseAll() {
    this.expandedRows = {};
    console.log('All rows collapsed');
  }
  expandAll() {
    this.tasks.forEach((task) => {
      this.expandedRows[task.techId] = true;
    });
    console.log('All rows expanded');
  }

  loadTasks(): void {
    this.taskSerivce
      .getTasks()
      .subscribe({
        next: (value) => {
          this.tasks = value;
          console.log('tasks', value);
        },
        error: (err) => console.error('Error loading tasks:', err),
      });
  }
}
