import { useBoundStore } from '../../stores/store';

type Props = {
    type: 'start' | 'compare' | 'abort';
    disabled?: boolean;
};

export default function Button({ type, disabled }: Props) {
    if (type === 'start') {
        return (
            <button onMouseDown={() => useBoundStore.setState({ isComparing: true })} className='bg-blue-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90'>
                Start Comparison
            </button>
        );
    } else if (type === 'compare') {
        const style = disabled
            ? 'bg-sky-500/50 cursor-not-allowed text-white text-lg px-9 py-3 shadow-lg rounded-full'
            : 'bg-sky-500 text-white text-lg px-9 py-3 shadow-lg rounded-full active:scale-90';

        return <button className={style}>Compare</button>;
    } else if (type === 'abort') {
        return (
            <button
                onMouseDown={() => useBoundStore.setState({ isComparing: false })}
                className='absolute top-1 right-3 bg-red-500 text-white text-lg px-9 py-1 shadow-lg shadow-black/25 rounded-full active:scale-90'>
                Abort
            </button>
        );
    }
}
