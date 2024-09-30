import { createLazyFileRoute } from '@tanstack/react-router';

import type { Shop } from '../types/shop';
import { getShops } from '../lib/queries/getShops';
import { useQuery } from '@tanstack/react-query';

export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {
    const { data, isSuccess, isLoading, isError } = useQuery(getShops);

    return (
        <main className='flex flex-col h-full'>
            <h2 className='text-3xl flex-shrink-0'>Shop Compare App</h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

            <div id='shops' className='flex-grow overflow-y-auto'>
                {isSuccess &&
                    data.map((shop: Shop) => (
                        <div key={shop.id} className='bg-sky-200 mb-12'>
                            <h3>{shop.name}</h3>
                            <p>{shop.street}</p>
                            <p>{shop.city}</p>
                            <p>{shop.zip}</p>
                            <p>{shop.website}</p>
                            <p>{shop.rating}</p>
                        </div>
                    ))}
            </div>
        </main>
    );
}
