type CompareStates = {
    selectedShops: Shop[];
};

type CompareActions = {
    addShop: (shop: Shop) => void;
    removeShop: (shop: Shop) => void;
};

export type CompareSlice = CompareStates & CompareActions;
