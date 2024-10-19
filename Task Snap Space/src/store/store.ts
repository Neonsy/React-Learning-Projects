import { create } from 'zustand';
import { createJSONStorage, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Store } from '../types/store';
import { categorySlice } from './slices/category';
import { taskSlice } from './slices/task';

import { persist } from 'zustand/middleware';

export const useBoundStore = create<Store>()(
    devtools(
        persist(
            immer((...sg) => ({
                ...categorySlice(...sg),
                ...taskSlice(...sg),
            })),
            {
                name: 'tasks',
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({ tasks: state.tasks }),
            }
        )
    )
);
