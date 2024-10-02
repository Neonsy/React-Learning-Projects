import { createLazyFileRoute } from '@tanstack/react-router';



export const Route = createLazyFileRoute('/app')({
    component: App,
});

export default function App() {

    return <AppPage />;
}
