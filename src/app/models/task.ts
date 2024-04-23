import { Subtask } from "./subtask";

export interface Task {
    id: number;
    title: string;
    deadline: string; 
    subtasks: Subtask[];
    status: boolean;
    
}