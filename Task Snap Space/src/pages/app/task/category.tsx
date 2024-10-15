import { FiCheckSquare } from 'react-icons/fi';

import TaskCard from './card';

import type { TaskList } from '../../../types/taskList';

type Props = {
    type: 'to-do' | 'in-progress' | 'completed';
    taskList: TaskList[];
};

export default function TaskCategory({ taskList, type }: Props) {
    const { heading, bg } = {
        'to-do': { heading: 'To Do', bg: '#0284C7' },
        'in-progress': { heading: 'In Progress', bg: '#2563EB' },
        completed: { heading: 'Completed', bg: '#4F46E5' },
    }[type];

    return (
        <div>
            <div
                className={`flex justify-between items-center bg-[${bg}] text-white shadow-xl shadow-black/50 font-bold px-3 py-2 rounded-tl-xl rounded-tr-xl`}>
                <h3>{heading}</h3>
                <FiCheckSquare className='text-2xl' />
            </div>

            <div className='bg-slate-100 flex flex-col gap-y-2.5 pb-12'>
                {taskList.map((task) => (
                    <TaskCard key={task.id} text={task.content} />
                ))}
            </div>
        </div>
    );
}
