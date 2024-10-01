import { createLazyFileRoute } from '@tanstack/react-router';
import { SiTailwindcss } from 'react-icons/si';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <>
            <h2>Welcome Home!</h2>
            <SiTailwindcss className='text-9xl text-sky-500' />
        </>
    );
}
