import { MdKeyboardArrowRight } from 'react-icons/md';
import Rating from './rating';

import { useAtom } from 'jotai';
import { popup } from '../../atoms/popupAtom';

import { useShallow } from 'zustand/shallow';
import { useBoundStore } from '../../stores/store';

import type { Shop } from '../../types/shop';

export type Props = {
    shop: Shop;
    isComparing?: boolean;
    onToggle?: () => void;
    isSelected?: boolean;
    disableCheckbox?: boolean;
};

export default function ShopCard({ shop, isComparing, onToggle, isSelected, disableCheckbox }: Props) {
    const [, setShowPopup] = useAtom(popup);

    const { setShopDetails } = useBoundStore(
        useShallow((state) => ({
            setShopDetails: state.setShopDetails,
        }))
    );

    return (
        <div className='bg-white mb-3 grid grid-cols-3 shadow-lg p-9'>
            <div className='flex gap-x-3 items-center'>
                <input
                    type='checkbox'
                    className={`${!isComparing && 'invisible'} ${disableCheckbox && 'cursor-not-allowed'} w-5 h-5`}
                    onChange={onToggle}
                    checked={isSelected}
                    disabled={disableCheckbox}
                />
                <h3 className='font-bold'>{shop.name}</h3>
            </div>

            <Rating rating={shop.rating} />

            <button
                onMouseDown={() => {
                    setShopDetails(shop);
                    setShowPopup(true);
                }}
                className='flex justify-self-end items-center text-blue-500 hover:underline'>
                Show Details
                <MdKeyboardArrowRight />
            </button>
        </div>
    );
}
