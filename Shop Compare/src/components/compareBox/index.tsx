import { useBoundStore } from '../../stores/store';
import { useShallow } from 'zustand/shallow';

import Button from '../button';

import Rating from '../shopCard/rating';

import { HiShoppingBag } from 'react-icons/hi2';
import { FaTrashAlt } from 'react-icons/fa';

import type { Shop } from '../../types/shop';

type Props = {
    selectedShops: Shop[];
};

export default function CompareBox({ selectedShops }: Props) {
    const { removeShop } = useBoundStore(
        useShallow((state) => ({
            removeShop: state.removeShop,
        }))
    );

    return (
        <section className='relative mt-12 py-5 px-9 bg-white flex-grow flex flex-col gap-y-5'>
            <h3 className='font-bold text-2xl'>Selected Shops</h3>
            <div className='grid grid-cols-3 flex-grow gap-x-5'>
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className='h-full w-full bg-sky-50 outline-dashed outline-2 flex flex-col justify-center items-center gap-y-3'>
                        {selectedShops[index] ? (
                            <>
                                <FaTrashAlt className='text-3xl text-red-500' onClick={() => removeShop(selectedShops[index])} />
                                <p>{selectedShops[index].name}</p>
                                {selectedShops[index].rating && <Rating rating={selectedShops[index].rating} />}
                            </>
                        ) : (
                            <>
                                <p>Select a shop</p>
                                <HiShoppingBag className='text-5xl text-sky-500' />
                            </>
                        )}
                    </div>
                ))}

                <Button type='abort' />
            </div>
        </section>
    );
}
