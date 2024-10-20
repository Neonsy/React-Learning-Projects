import { Task } from '../task';

export type TaskState = {
    tasks: Task[];
};

export type TaskAction = {
    removeTask: (id: Task['id']) => void;
};

export type TaskSlice = TaskState & TaskAction;
