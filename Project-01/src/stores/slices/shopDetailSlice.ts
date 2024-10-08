import { StateCreator } from 'zustand';

import type { ShopDetailSlice, ShopDetailState } from '../../types/slices/shopDetailSlice';

const initialState: ShopDetailState = {
    name: '',
    street: '',
    city: '',
    zip: '',
    website: '',
};

export const createShopDetailSlice: StateCreator<ShopDetailSlice, [['zustand/immer', never]], [], ShopDetailSlice> = (set) => ({
    ...initialState,

    setShopDetails: (shop) => {
        set(() => ({
            name: shop.name,
            street: shop.street,
            city: shop.city,
            zip: shop.zip,
            website: shop.website,
        }));
    },
});
