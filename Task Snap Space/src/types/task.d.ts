import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnId } from './category';

export type Task = {
    id: UniqueIdentifier;
    columnId: ColumnId;
    content: string;
};
