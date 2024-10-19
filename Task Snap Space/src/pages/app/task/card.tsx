import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { Task } from '../../../types/task';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
    task: Task;
    bg?: string;
    transparent?: boolean;
};

export default function TaskCard({ task, bg, transparent }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: task.id,
        data: {
            type: 'task',
            task,
        },
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className={`opacity-75 first:rounded-b-xl rounded-xl w-full min-h-12 max-h-36 ${bg} ring-2 ring-inset ring-slate-950 shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3`}>
                <button className='invisible'>
                    <IoCloseOutline className='w-7 h-7' />
                </button>
                <p className='break-all flex-grow invisible'>{task.content}</p>
                <button className='invisible' {...listeners} {...attributes}>
                    <MdOutlineDragIndicator />
                </button>
            </div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`${transparent ? 'opacity-25' : ''} w-full min-h-12 max-h-36 first:rounded-b-xl rounded-xl bg-slate-50 shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3`}>
            <button>
                <IoCloseOutline className='w-7 h-7' />
            </button>
            <p className='break-all flex-grow'>{task.content}</p>
            <button {...listeners} {...attributes}>
                <MdOutlineDragIndicator />
            </button>
        </div>
    );
}
