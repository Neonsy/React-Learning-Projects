import { StateCreator } from 'zustand';

import type { ShopDetailSlice, ShopDetailState } from '../../types/slices/shopDetailSlice';
import type { Store } from '../../types/store';
import type { Shop } from '../../types/shop';

const initialState: ShopDetailState = {
    shopDetails: {
        name: '',
        street: '',
        city: '',
        zip: '',
        website: '',
    },
};

export const createShopDetailSlice: StateCreator<Store, [['zustand/immer', never], ['zustand/devtools', never]], [], ShopDetailSlice> = (set) => ({
    ...initialState,

    setShopDetails: (shop) => {
        set(setShopDetailsLogic(shop), false, 'ShopDetailSlice/SetShopDetails');
    },
});

const setShopDetailsLogic = (shop: Shop) => (state: ShopDetailState) => {
    state.shopDetails = {
        name: shop.name,
        street: shop.street,
        city: shop.city,
        zip: shop.zip,
        website: shop.website,
    };
};
