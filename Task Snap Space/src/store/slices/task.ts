import { StateCreator } from 'zustand';
import { TaskSlice, TaskState } from '../../types/slices/task';
import { Store } from '../../types/store';

const initialState: TaskState = {
    tasks: [
        {
            id: '1',
            columnId: 'todo',
            content: 'Task 1',
        },
        {
            id: '2',
            columnId: 'todo',
            content: 'Task 2',
        },
        {
            id: '3',
            columnId: 'todo',
            content: 'Task 3',
        },
    ],
};

export const taskSlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], TaskSlice> = () => ({ ...initialState });
