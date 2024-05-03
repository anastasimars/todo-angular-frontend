import { Subtask } from "./subtask";

export interface Task {
    techId: number;
    taskTitle: string;
    deadline: string; 
    subtasks: Subtask[];
    status: boolean;
    
}