import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineDragIndicator } from 'react-icons/md';

type Props = {
    text: string;
};

export default function TaskCard({ text }: Props) {
    return (
        <div className='shadow-lg shadow-black/15 py-2 flex items-center gap-x-2 px-3'>
            <IoCloseOutline className='w-7 h-7 cursor-pointer' />
            <p className='break-all flex-grow'>{text}</p>
            <MdOutlineDragIndicator />
        </div>
    );
}
