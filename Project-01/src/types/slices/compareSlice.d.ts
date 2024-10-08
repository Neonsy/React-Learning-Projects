export type CompareState = {
    selectedShops: Shop[];
    isComparing: boolean;
};

export type CompareAction = {
    toggleShop: (shop: Shop) => void;
};

export type CompareSlice = CompareState & CompareAction;
