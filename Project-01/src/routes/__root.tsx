import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Header from '../components/header';
import Footer from '../components/footer';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <div id='app'>
            <Header />

            {/* <div id='route'>
                <Outlet />
            </div> */}

            {/* <Footer /> */}

            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </div>
    ),
});
