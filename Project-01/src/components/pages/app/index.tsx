import { useQuery } from '@tanstack/react-query';
import { getShops } from '../../../lib/queries/getShops';

import Button from '../../button';
import CompareBox from '../../compareBox';
import Container from '../../container';
import Popup from '../../popup';
import ShopCard from '../../shopCard';

import { LuExternalLink } from 'react-icons/lu';

import { useShallow } from 'zustand/shallow';
import { useBoundStore } from '../../../stores/store';

export default function AppPage() {
    const { data, isSuccess, isLoading, isError } = useQuery(getShops);

    const { name, street, zip, city, website } = useBoundStore(
        useShallow((state) => ({
            name: state.shopDetails.name,
            street: state.shopDetails.street,
            zip: state.shopDetails.zip,
            city: state.shopDetails.city,
            website: state.shopDetails.website,
        }))
    );

    const { isComparing, selectedShops, toggleShop, showResult } = useBoundStore(
        useShallow((state) => ({
            isComparing: state.isComparing,
            selectedShops: state.selectedShops,
            toggleShop: state.toggleShop,
            showResult: state.showResult,
        }))
    );

    return (
        <main className='h-full'>
            <Container className='pt-5 flex flex-col'>
                <section className='flex flex-col justify-center items-center gap-y-5'>
                    <h2 className='font-bold'>Compare Shops Instantly</h2>
                    <p className='text-slate-500'>Find the best shops for your needs.</p>
                    {showResult ? (
                        <Button type='back' />
                    ) : !isComparing ? (
                        <Button type='start' />
                    ) : (
                        <Button
                            showResult={() => {
                                if (selectedShops.length >= 2 && selectedShops.length <= 3) {
                                    useBoundStore.setState({ showResult: true });
                                    useBoundStore.setState({ isComparing: false });
                                }
                            }}
                            disabled={selectedShops.length <= 1}
                            type='compare'
                        />
                    )}
                </section>

                {isLoading && <p>Loading data...</p>}
                {isError && <p>Error fetching data</p>}

                <section id='shops' className='h-2/4 overflow-y-auto mt-9'>
                    {showResult
                        ? [...selectedShops].sort((a, b) => b.rating - a.rating).map((shop) => <ShopCard key={shop.name} shop={shop} />)
                        : isSuccess &&
                          [...data].map((shop) => (
                              <ShopCard
                                  key={shop.name}
                                  shop={shop}
                                  isComparing={isComparing}
                                  onToggle={() => toggleShop(shop)}
                                  isSelected={selectedShops.some((s) => s.id === shop.id)}
                                  disableCheckbox={!selectedShops.some((s) => s.id === shop.id) && selectedShops.length >= 3}
                              />
                          ))}
                </section>

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

                {isComparing && <CompareBox selectedShops={selectedShops} />}
            </Container>
        </main>
    );
}
