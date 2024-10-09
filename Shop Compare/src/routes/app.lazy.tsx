import { createLazyFileRoute } from '@tanstack/react-router';

import AppPage from '../components/pages/app';

export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {
    return <AppPage />;
}
