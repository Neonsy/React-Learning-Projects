import { queryOptions } from '@tanstack/react-query';

import type { Shop } from '../../types/shop';

// Define the options for the getShops query, so it can be reused, and removes verbose code when the data is needed
export const getShops = queryOptions({
    queryKey: ['shops'],
    retry: false,
    queryFn: () => fetch('http://localhost:3000/stores').then((res) => res.json()) as Promise<Shop[]>,
});
