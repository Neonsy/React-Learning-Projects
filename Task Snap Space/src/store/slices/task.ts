import { StateCreator } from 'zustand';
import { TaskSlice, TaskState } from '../../types/slices/task';
import { Store } from '../../types/store';

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], TaskSlice> = () => ({ ...initialState });
