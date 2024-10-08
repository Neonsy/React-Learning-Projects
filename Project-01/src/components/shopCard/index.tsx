import { MdKeyboardArrowRight } from 'react-icons/md';
import Rating from './rating';

import type { Shop } from '../../types/shop';
import { useBoundStore } from '../../stores/store';
import { useShallow } from 'zustand/shallow';
import { useAtom } from 'jotai';
import { popup } from '../../atoms/popupAtom';

export type Props = {
    shop: Shop;
};

export default function ShopCard({ shop }: Props) {
    const [, setShowPopup] = useAtom(popup);

    const { setShopDetails } = useBoundStore(
        useShallow((state) => ({
            setShopDetails: state.setShopDetails,
        }))
    );

    return (
        <div className='bg-white mb-3 grid grid-cols-3 shadow-lg p-9'>
            <div className='flex gap-x-3 items-center'>
                <input type='checkbox' className='w-5 h-5' />
                <h3 className='font-bold'>{shop.name}</h3>
            </div>
            <Rating rating={shop.rating} />
            <button
                onClick={() => {
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
