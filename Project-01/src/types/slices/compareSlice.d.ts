export type CompareState = {
    selectedShops: Shop[];
};

export type CompareAction = {
    addShop: (shop: Shop) => void;
    removeShop: (shop: Shop) => void;
};

export type CompareSlice = CompareState & CompareAction;
