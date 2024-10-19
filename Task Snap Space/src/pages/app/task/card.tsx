import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { Task } from '../../../types/task';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
    task: Task;
};

export default function TaskCard({ task }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
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

    return (
        <div ref={setNodeRef} style={style} className='bg-slate-50 shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
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
