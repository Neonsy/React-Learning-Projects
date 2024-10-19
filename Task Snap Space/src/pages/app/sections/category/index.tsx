import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { activeTaskAtom } from '../../../../atoms/activeTask';
import { CategoryId } from '../../../../types/category';
import type { Task } from '../../../../types/task';
import TaskCard from '../taskCard';
import Icon from './icon';

type Props = {
    type: CategoryId;
    taskList: Task[];
};

export default function TaskCategory({ taskList, type }: Props) {
    const taskIds = useMemo(() => taskList.map((task) => task.id), [taskList]);

    const [activeTask] = useAtom(activeTaskAtom);

    const { setNodeRef } = useDroppable({
        id: type,
        data: {
            type: 'category',
            taskList,
        },
    });

    const { heading, bg } = {
        todo: { heading: 'To Do', bg: 'bg-todo' },
        inProgress: { heading: 'In Progress', bg: 'bg-inProgress' },
        completed: { heading: 'Completed', bg: 'bg-completed' },
    }[type];

    if (activeTask && activeTask.columnId !== type) {
        return (
            <div>
                <div
                    className={`flex justify-between items-center ${bg} text-white shadow-xl shadow-black/10 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl`}>
                    <h3>{heading}</h3>
                    <Icon category={type} className='text-xl' />
                </div>

                <div
                    id={type}
                    ref={setNodeRef}
                    className={`h-[600px] shadow-lg shadow-black/25 overflow-y-auto ${bg} relative bg-opacity-25 flex flex-col gap-y-2.5 py-3`}>
                    <SortableContext id={type} items={taskIds} strategy={verticalListSortingStrategy}>
                        {taskList.map((task) => (
                            <TaskCard key={task.id} task={task} bg={bg} transparent />
                        ))}
                    </SortableContext>
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl text-slate-950 font-bold'>
                        Move Task Here
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className={`flex justify-between items-center ${bg} text-white shadow-xl shadow-black/10 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl`}>
                <h3>{heading}</h3>
                <Icon category={type} className='text-xl' />
            </div>

            <div id={type} ref={setNodeRef} className='h-[600px] shadow-lg shadow-black/25 overflow-y-auto bg-slate-100 flex flex-col gap-y-2.5 py-3'>
                <SortableContext id={type} items={taskIds} strategy={verticalListSortingStrategy}>
                    {taskList.map((task) => (
                        <TaskCard key={task.id} task={task} bg={bg} />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
}
