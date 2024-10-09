import { StateCreator } from 'zustand';

import type { CompareSlice, CompareState } from '../../types/slices/compareSlice';
import type { Shop } from '../../types/shop';
import type { Store } from '../../types/store';

const initialState: CompareState = {
    selectedShops: [],
    isComparing: false,
    showResult: false,
};

export const createCompareSlice: StateCreator<Store, [['zustand/immer', never], ['zustand/devtools', never]], [], CompareSlice> = (set) => ({
    ...initialState,

    toggleShop: (shop) => set(toggleShopLogic(shop), false, 'CompareSlice/ToggleShop'),
    removeShop: (shop) => set(removeShopLogic(shop), false, 'CompareSlice/RemoveShop'),
});

const toggleShopLogic = (shop: Shop) => (state: CompareState) => {
    const index = state.selectedShops.findIndex((s) => s.id === shop.id);

    if (index !== -1) {
        state.selectedShops.splice(index, 1);
    } else if (state.selectedShops.length < 3) {
        state.selectedShops.push(shop);
    }
};

const removeShopLogic = (shop: Shop) => (state: CompareState) => {
    state.selectedShops = state.selectedShops.filter((s) => s.id !== shop.id);
};
