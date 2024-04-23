import { Task } from "./task";
export interface Subtask {
    id: number;
    subtaskTitle: string;
    task: Task;
    status: boolean;
}