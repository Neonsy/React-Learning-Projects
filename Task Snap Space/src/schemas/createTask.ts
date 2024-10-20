import { z } from 'zod';

export const createTaskSchema = z.object({
    content: z.string().trim().min(1, { message: 'Task content is required' }).max(64, { message: 'Task content is too long' }),
    columnId: z.enum(['todo', 'inProgress'], { required_error: 'Category is required' }),
});
