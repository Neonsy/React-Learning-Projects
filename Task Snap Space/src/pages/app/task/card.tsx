import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { Task } from '../../../types/task';

type Props = {
    task: Task
};

export default function TaskCard({ task }: Props) {
    return (
        <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
            <IoCloseOutline className='w-7 h-7 cursor-pointer' />
            <p className='break-all flex-grow'>{task.content}</p>
            <MdOutlineDragIndicator />
        </div>
    );
}
