import { MdKeyboardArrowRight } from 'react-icons/md';
import type { Shop } from '../../types/shop';

import Rating from './rating';

export type Props = {
    shop: Shop;
    isSelected: boolean;
    onToggle: () => void;
    disableCheckbox: boolean;
};

export default function ShopCard({ shop, isSelected, onToggle, disableCheckbox }: Props) {
    return (
        <div className='bg-white mb-3 grid grid-cols-3 shadow-lg p-9'>
            <div className='flex gap-x-3 items-center'>
                <input
                    type='checkbox'
                    checked={isSelected}
                    onChange={onToggle}
                    disabled={disableCheckbox}
                    className='w-5 h-5'
                />
                <h3 className='font-bold'>{shop.name}</h3>
            </div>
            <Rating rating={shop.rating} />
            <button className='flex justify-self-end items-center text-blue-500 hover:underline'>
                Show Details
                <MdKeyboardArrowRight />
            </button>
        </div>
    );
}
