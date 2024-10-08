import { create } from 'zustand';

import { createCompareSlice } from './slices/compareSlice';
import { createShopDetailSlice } from './slices/shopDetailSlice';

import type { Store } from '../types/store';

export const useBoundStore = create<Store>()((...sg) => ({
    ...createCompareSlice(...sg),
    ...createShopDetailSlice(...sg),
}));
