import { StateCreator } from 'zustand';

import type { CompareSlice, CompareState } from '../../types/slices/compareSlice';

const initialState: CompareState = {
    selectedShops: [],
};

export const createCompareSlice: StateCreator<CompareSlice, [], [], CompareSlice> = (set) => ({
    ...initialState,

    addShop: (shop) => {
        set((state) => ({
            selectedShops: [...state.selectedShops, shop],
        }));
    },

    removeShop: (shop) => {
        set((state) => ({
            selectedShops: state.selectedShops.filter((s) => s.id !== shop.id),
        }));
    },
});
