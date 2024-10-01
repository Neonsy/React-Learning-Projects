import { createLazyFileRoute } from '@tanstack/react-router';

import type { Shop } from '../types/shop';
import { getShops } from '../lib/queries/getShops';
import { useQuery } from '@tanstack/react-query';

import Container from '../components/container';
import ShopCard from '../components/shopCard';
import CompareBox from '../components/compareBox';

export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {
    const { data, isSuccess, isLoading, isError } = useQuery(getShops);

    return (
        <main className='h-full'>
            <Container className='pt-5 flex flex-col'>
                <section className='flex flex-col justify-center items-center gap-y-5'>
                    <h2 className='font-bold'>Compare Shops Instantly</h2>
                    <p className='text-slate-500'>Find the best shops for your needs.</p>
                    <button className='bg-blue-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90'>
                        Start Comparison
                    </button>
                </section>

                {isLoading && <p>Loading data...</p>}
                {isError && <p>Error fetching data</p>}

                <div id='shops' className='h-2/4 overflow-y-auto mt-9'>
                    {isSuccess &&
                        data.map((shop: Shop) => <ShopCard key={shop.id} name={shop.name} rating={shop.rating} />)}
                </div>

                <CompareBox />
            </Container>
        </main>
    );
}
