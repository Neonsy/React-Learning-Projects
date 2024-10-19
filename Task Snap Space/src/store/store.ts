import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Store } from '../types/store';
import { categorySlice } from './slices/category';
import { taskSlice } from './slices/task';

export const useBoundStore = create<Store>()(
    devtools(
        immer((...sg) => ({
            ...categorySlice(...sg),
            ...taskSlice(...sg),
        }))
    )
);
