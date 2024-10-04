import { StateCreator } from 'zustand';

import type { CompareSlice } from '../types/compareSlice';

export const createCompareSlice: StateCreator<CompareSlice, [], [], CompareSlice> = (set) => ({
    selectedShops: [],

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
