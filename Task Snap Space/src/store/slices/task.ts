import { StateCreator } from 'zustand';
import { TaskSlice, TaskState } from '../../types/slices/task';
import { Store } from '../../types/store';
import { Task } from '../../types/task';

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], TaskSlice> = (set) => ({
    ...initialState,

    removeTask: (id: Task['id']) => {
        set(removeTaskLogic(id));
    },
});

function removeTaskLogic(id: Task['id']) {
    return (state: TaskState) => {
        const index = state.tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            state.tasks.splice(index, 1);
        }
    };
}
