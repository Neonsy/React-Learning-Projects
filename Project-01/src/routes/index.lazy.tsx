import { createLazyFileRoute } from '@tanstack/react-router';
import HomePage from '../components/homePage';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <>
            <HomePage />
        </>
    );
}
