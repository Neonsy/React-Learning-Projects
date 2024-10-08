import { IoCloseSharp } from 'react-icons/io5';

type Props = {
    children: React.ReactNode;
};

export default function Popup({ children }: Props) {
    return (
        <div id='popup-overlay' className='fixed top-0 left-0 w-full h-full bg-black/50'>
            <div
                id='popup-content'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-9 min-h-[300px] min-w-[450px] shadow-lg shadow-black/50 rounded-xl flex flex-col justify-center'>
                {children}
                <button className='absolute top-1 right-1 self-end text-2xl text-blue-500 hover:underline'>
                    <IoCloseSharp />
                </button>
            </div>
        </div>
    );
}
