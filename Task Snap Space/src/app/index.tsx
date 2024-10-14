import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Header from '../components/header';

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}
