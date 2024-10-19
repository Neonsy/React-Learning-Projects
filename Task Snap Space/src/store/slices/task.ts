import { StateCreator } from 'zustand';
import { TaskSlice, TaskState } from '../../types/slices/task';
import { Store } from '../../types/store';
import { v4 as uuidv4 } from 'uuid';

const initialState: TaskState = {
    tasks: [
        {
            id: uuidv4(),
            columnId: 'todo',
            content: 'Task 1',
        },
        {
            id: uuidv4(),
            columnId: 'todo',
            content: 'Task 2',
        },
        {
            id: uuidv4(),
            columnId: 'todo',
            content: 'Task 3',
        },
        {
            id: uuidv4(),
            columnId: 'inProgress',
            content: 'Task 4',
        },
        {
            id: uuidv4(),
            columnId: 'inProgress',
            content: 'Task 5',
        },
        {
            id: uuidv4(),
            columnId: 'inProgress',
            content: 'Task 6',
        },
        {
            id: uuidv4(),
            columnId: 'completed',
            content: 'Task 7',
        },
        {
            id: uuidv4(),
            columnId: 'completed',
            content: 'Task 8',
        },
        {
            id: uuidv4(),
            columnId: 'completed',
            content: 'Task 9',
        },
    ],
};

export const taskSlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], TaskSlice> = () => ({ ...initialState });
