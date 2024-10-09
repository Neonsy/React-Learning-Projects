import type { Shop } from '../shop';

export type ShopDetailState = {
    shopDetails: {
        name: string;
        street: string;
        city: string;
        zip: string;
        website: string;
    };
};

export type ShopDetailAction = {
    setShopDetails: (details: Shop) => void;
};

export type ShopDetailSlice = ShopDetailState & ShopDetailAction;
