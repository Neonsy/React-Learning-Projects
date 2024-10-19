import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useMemo } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import type { Task } from '../../../types/task';
import TaskCard from './card';

type Props = {
    type: 'todo' | 'inProgress' | 'completed';
    taskList: Task[];
};

export default function TaskCategory({ taskList, type }: Props) {
    const taskIds = useMemo(() => taskList.map((task) => task.id), [taskList]);

    const { setNodeRef } = useDroppable({
        id: type,
        data: {
            type,
            taskList,
        },
    });

    const { heading, bg } = {
        todo: { heading: 'To Do', bg: 'bg-[#0284C7]' },
        inProgress: { heading: 'In Progress', bg: 'bg-[#2563EB]' },
        completed: { heading: 'Completed', bg: 'bg-[#4F46E5]' },
    }[type];

    return (
        <div>
            <div
                className={`flex justify-between items-center ${bg} text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl`}>
                <h3>{heading}</h3>
                <FiCheckSquare className='text-2xl' />
            </div>

            <div ref={setNodeRef} className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
                    {taskList.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
}
