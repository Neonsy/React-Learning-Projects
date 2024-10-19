import { UniqueIdentifier } from '@dnd-kit/core';
import { CategoryId } from './category';

export type Task = {
    id: UniqueIdentifier;
    columnId: CategoryId;
    content: string;
};
