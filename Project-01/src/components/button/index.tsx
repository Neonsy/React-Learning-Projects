import { Link } from '@tanstack/react-router';

import { useBoundStore } from '../../stores/store';

type Props = {
    type: 'home' | 'start' | 'compare' | 'abort' | 'back';
    disabled?: boolean;
    showResult?: () => void;
};

export default function Button({ type, disabled, showResult }: Props) {
    if (type === 'start') {
        return (
            <button
                onMouseDown={() => useBoundStore.setState({ isComparing: true })}
                className='bg-blue-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90'>
                Start Comparison
            </button>
        );
    } else if (type === 'compare') {
        const style = disabled
            ? 'bg-sky-500/50 cursor-not-allowed text-white text-lg px-9 py-3 shadow-lg rounded-full'
            : 'bg-sky-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90';

        return (
            <button onMouseDown={showResult} className={style}>
                Compare
            </button>
        );
    } else if (type === 'back') {
        return (
            <button
                onMouseDown={() => {
                    useBoundStore.setState({ showResult: false });
                    useBoundStore.setState({ selectedShops: [] });
                }}
                className='bg-blue-500 text-white text-lg px-9 py-3 shadow-lg shadow-black/25 rounded-full active:scale-90'>
                Back
            </button>
        );
    } else if (type === 'abort') {
        return (
            <button
                onMouseDown={() => useBoundStore.setState({ isComparing: false })}
                className='absolute top-1 right-3 bg-red-500 text-white text-lg px-9 py-1 shadow-lg shadow-black/25 rounded-full active:scale-90'>
                Abort
            </button>
        );
    } else if (type === 'home') {
        return (
            <Link
                to='/app'
                className='mt-5 bg-slate-950 text-white text-lg px-12 py-5 rounded-xl hover:transition-all hover:outline hover:outline-2 hover:outline-blue-500 active:transition-none active:scale-90'>
                Check out the App
            </Link>
        );
    }
}
