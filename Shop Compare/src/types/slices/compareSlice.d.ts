export type CompareState = {
    selectedShops: Shop[];
    isComparing: boolean;
    showResult: boolean;
};

export type CompareAction = {
    toggleShop: (shop: Shop) => void;
    removeShop: (shop: Shop) => void;
};

export type CompareSlice = CompareState & CompareAction;
