import { StateCreator } from 'zustand';
import { CategorySlice, CategoryState } from '../../types/slices/category';
import { Store } from '../../types/store';

const initialState: CategoryState = {
    categories: [],
};

export const categorySlice: StateCreator<Store, [['zustand/devtools', never], ['zustand/immer', never]], [], CategorySlice> = () => ({
    ...initialState,
});
