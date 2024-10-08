import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createCompareSlice } from './slices/compareSlice';
import { createShopDetailSlice } from './slices/shopDetailSlice';

import type { Store } from '../types/store';

export const useBoundStore = create<Store>()(
    devtools(
        immer((...sg) => ({
            ...createCompareSlice(...sg),
            ...createShopDetailSlice(...sg),
        }))
    )
);
