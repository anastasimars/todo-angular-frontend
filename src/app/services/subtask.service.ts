import { Injectable, inject } from "@angular/core";
import { Subtask } from "../models/subtask";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
  })
export class SubtaskService{
  private apiUrl = 'http://localhost:8080/api/tasks';
  private readonly http = inject(HttpClient);

    addSubtask(taskId: number, subtask : Subtask): Observable<Subtask>{
        const url = `${this.apiUrl}/${taskId}/subtasks`;
        return this.http.post<Subtask>(url, subtask);
    }

    editSubtask(taskId: number, 
        subtaskId: number, subtask: Subtask,  status: boolean): Observable<Subtask>{
            const url = `${this.apiUrl}/${taskId}/subtasks/${subtaskId}`;
            return this.http.patch<Subtask>(url, { ...subtask, status });
    }

    deleteSubtask(taskId: number, subtaskId: number): Observable<Subtask>{
        const url = `${this.apiUrl}/${taskId}/subtasks/${subtaskId}`;
        return this.http.delete<Subtask>(url);
    }

    markSubtaskAsCompleted(taskId: number, subtaskId: number, status: boolean): Observable<Subtask>{
        const url = `${this.apiUrl}/${taskId}/subtasks/${subtaskId}/complete`;
        return this.http.patch<Subtask>(url, { status });
    }

}