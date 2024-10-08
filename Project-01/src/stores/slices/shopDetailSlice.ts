import { StateCreator } from 'zustand';

import type { ShopDetailSlice, ShopDetailState } from '../../types/slices/shopDetailSlice';

const initialState: ShopDetailState = {
    name: '',
    street: '',
    city: '',
    zip: '',
    website: '',
};

export const createShopDetailSlice: StateCreator<ShopDetailSlice, [], [], ShopDetailSlice> = () => ({
    ...initialState,
});
