import { createLazyFileRoute } from '@tanstack/react-router';

import type { Shop } from '../types/shop';
import { getShops } from '../lib/queries/getShops';
import { useQuery } from '@tanstack/react-query';

export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {
    const { data, isSuccess } = useQuery(getShops);

    return (
        <main>
            <h2>Shop Compare App</h2>
            {isSuccess &&
                data.map((shop: Shop) => (
                    <div key={shop.id}>
                        <h3>{shop.name}</h3>
                        <p>{shop.street}</p>
                        <p>{shop.city}</p>
                        <p>{shop.zip}</p>
                        <p>{shop.website}</p>
                        <p>{shop.rating}</p>
                    </div>
                ))}
        </main>
    );
}
