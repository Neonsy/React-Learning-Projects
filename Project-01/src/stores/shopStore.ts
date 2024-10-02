import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { Shop } from '../types/shop';

type ShopState = {
    selectedShops: Shop[];
    toggleShop: (shop: Shop) => void;
};

export const useShopStore = create<ShopState>()(
    immer((set) => ({
        selectedShops: [],
        toggleShop: (shop) => set(toggleShopLogic(shop)),
    }))
);

const toggleShopLogic = (shop: Shop) => (state: ShopState) => {
    const index = state.selectedShops.findIndex((s) => s.id === shop.id);

    if (index !== -1) {
        state.selectedShops.splice(index, 1);
    } else if (state.selectedShops.length < 3) {
        state.selectedShops.push(shop);
    }
};
