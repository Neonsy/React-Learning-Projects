import { useQuery } from '@tanstack/react-query';
import { getShops } from '../../../lib/queries/getShops';

import Container from '../../container';
import ShopCard from '../../shopCard';
import CompareBox from '../../compareBox';

import { useShopStore } from '../../../stores/shopStore';

import type { Shop } from '../../../types/shop';

export default function AppPage() {
    const { data, isSuccess, isLoading, isError } = useQuery(getShops);
    const { selectedShops, toggleShop } = useShopStore();

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
                        data.map((shop: Shop) => (
                            <ShopCard
                                key={shop.name}
                                shop={shop}
                                isSelected={selectedShops.some((s) => s.id === shop.id)}
                                onToggle={() => toggleShop(shop)}
                                disableCheckbox={
                                    !selectedShops.some((s) => s.id === shop.id) && selectedShops.length >= 3
                                }
                            />
                        ))}
                </div>

                <CompareBox />
            </Container>
        </main>
    );
}
