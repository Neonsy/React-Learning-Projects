import { create } from 'zustand';
import { Store } from '../types/store';
import { createCompareSlice } from './compareSlice';

export const boundStore = create<Store>()((...sg) => ({
    ...createCompareSlice(...sg),
}));
