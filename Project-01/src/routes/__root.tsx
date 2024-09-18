import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { QueryClient } from '@tanstack/react-query';
import Header from '../components/header';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <>
            <Header />

            <Outlet />
            
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </>
    ),
});
