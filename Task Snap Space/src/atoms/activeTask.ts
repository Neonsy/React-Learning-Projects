import { atom } from 'jotai';
import { Task } from '../types/task';

export const activeTaskCardAtom = atom<Task | null>(null);
