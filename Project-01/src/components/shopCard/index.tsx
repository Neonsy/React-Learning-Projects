import { MdKeyboardArrowRight } from 'react-icons/md';
import Rating from './rating';

export type Props = {
    name: string;
    rating: number;
};

export default function ShopCard({ name, rating }: Props) {
    return (
        <div className='bg-white mb-3 grid grid-cols-3 shadow-lg p-9'>
            <h3 className='font-bold justify-self-start'>{name}</h3>
            <Rating rating={rating} />
            <button className='flex justify-self-end items-center text-blue-500 hover:underline'>
                Show Details
                <MdKeyboardArrowRight />
            </button>
        </div>
    );
}
