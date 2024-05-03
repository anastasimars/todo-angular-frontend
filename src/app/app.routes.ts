import {  Routes } from '@angular/router';
import { TaskListComponent } from './compoments/task/task-list/task-list.component';


export const routes: Routes = [
{path: '', redirectTo: '/tasks', pathMatch: 'full'},
{path: 'tasks', component: TaskListComponent}
];