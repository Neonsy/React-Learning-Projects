import { atom } from 'jotai';
import { Task } from '../types/task';

export const activeTaskAtom = atom<Task | null>(null);
