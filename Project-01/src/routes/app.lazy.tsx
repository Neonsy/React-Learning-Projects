import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {
    return (
        <main>
            <h2>Shop Compare App</h2>
        </main>
    );
}
