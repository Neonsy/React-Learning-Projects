import { CategorySlice } from "./slices/category";
import { TaskSlice } from "./slices/task";

export type Store = CategorySlice & TaskSlice;