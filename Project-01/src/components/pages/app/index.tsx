import { useQuery } from '@tanstack/react-query';
import { getShops } from '../../../lib/queries/getShops';

import CompareBox from '../../compareBox';
import Container from '../../container';
import ShopCard from '../../shopCard';
import Popup from '../../popup';

import { LuExternalLink } from 'react-icons/lu';

import { useBoundStore } from '../../../stores/store';
import { useShallow } from 'zustand/shallow';

import type { Shop } from '../../../types/shop';

export default function AppPage() {
    const { data, isSuccess, isLoading, isError } = useQuery(getShops);

    const { name, street, zip, city, website } = useBoundStore(
        useShallow((state) => ({
            name: state.name,
            street: state.street,
            zip: state.zip,
            city: state.city,
            website: state.website,
        }))
    );

    return (
        <main className='h-full'>
            <Container className='pt-5 flex flex-col'>
                <section className='flex flex-col justify-center items-center gap-y-5'>
                    <h2 className='font-bold'>Compare Shops Instantly</h2>
                    <p className='text-slate-500'>Find the best shops for your needs.</p>
                    <button className='bg-blue-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90'>Start Comparison</button>
                </section>

                {isLoading && <p>Loading data...</p>}
                {isError && <p>Error fetching data</p>}

                <div id='shops' className='h-2/4 overflow-y-auto mt-9'>
                    {isSuccess && data.map((shop: Shop) => <ShopCard key={shop.name} shop={shop} />)}
                </div>

                <Popup>
                    <h3>Shop Details</h3>
                    <div className='my-3'>
                        <p>{name}</p>
                        <p>{street}</p>
                        <p>{`${zip} ${city}`}</p>
                    </div>
                    <a href={website} rel='noreferrer noopener' target='_blank' className='flex items-center gap-x-1 text-blue-500 hover:underline'>
                        Visit their Website <LuExternalLink />
                    </a>
                </Popup>

                <CompareBox />
            </Container>
        </main>
    );
}
