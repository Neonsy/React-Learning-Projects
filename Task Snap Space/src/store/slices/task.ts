import { StateCreator } from 'zustand';
import { TaskState } from '../../types/slices/task';
import { Store } from '../../types/store';

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], TaskState> = () => ({ ...initialState });
