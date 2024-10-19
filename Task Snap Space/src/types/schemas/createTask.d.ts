import { z } from 'zod';
import { createTaskSchema } from '../../schemas/createTask';

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;
