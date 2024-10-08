import { StateCreator } from 'zustand';

import type { CompareSlice, CompareState } from '../../types/slices/compareSlice';
import type { Shop } from '../../types/shop';

const initialState: CompareState = {
    selectedShops: [],
};

export const createCompareSlice: StateCreator<CompareSlice, [['zustand/immer', never]], [], CompareSlice> = (set) => ({
    ...initialState,

    addShop: (shop) => {
        set((state) => ({
            selectedShops: [...state.selectedShops.push(shop)],
        }));
    },

    removeShop: (shop) => {
        set((state) => ({
            selectedShops: state.selectedShops.filter((s: Shop) => s.id !== shop.id),
        }));
    },
});
