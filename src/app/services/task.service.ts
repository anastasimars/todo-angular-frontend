import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';
  private readonly http = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskWithSubtasks(taskId: number): Observable<Task>{
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.get<Task>(url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  editTask(taskId: number, task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.patch<Task>(url, task);
  }

  deleteTask(taskId: number): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<Task>(url);
  }

  markTaskAsCompleted(taskId: number): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
 return this.http.patch<Task>(url, {});
  }
}
