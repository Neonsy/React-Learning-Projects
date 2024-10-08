import { StateCreator } from 'zustand';

import type { CompareSlice, CompareState } from '../../types/slices/compareSlice';
import type { Shop } from '../../types/shop';
import { ShopDetailSlice } from '../../types/slices/shopDetailSlice';

const initialState: CompareState = {
    selectedShops: [],
    isComparing: false,
};

export const createCompareSlice: StateCreator<CompareSlice & ShopDetailSlice, [['zustand/immer', never], ['zustand/devtools', never]], [], CompareSlice> = (set) => ({
    ...initialState,

    toggleShop: (shop) => set(toggleShopLogic(shop), false, 'CompareSlice/ToggleShop'),
});

const toggleShopLogic = (shop: Shop) => (state: CompareState) => {
    const index = state.selectedShops.findIndex((s) => s.id === shop.id);

    if (index !== -1) {
        state.selectedShops.splice(index, 1);
    } else if (state.selectedShops.length < 3) {
        state.selectedShops.push(shop);
    }
};
