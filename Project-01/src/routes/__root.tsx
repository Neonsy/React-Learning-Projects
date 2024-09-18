import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { QueryClient } from '@tanstack/react-query';
import Header from '../components/header';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <>
            <Header />

            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
