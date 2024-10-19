import { UniqueIdentifier } from '@dnd-kit/core';

export type Task = {
    id: UniqueIdentifier;
    columnId: UniqueIdentifier;
    content: string;
};
