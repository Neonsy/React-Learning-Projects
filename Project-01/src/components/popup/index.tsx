import { useRef } from 'react';

import { useAtom } from 'jotai';
import { popup } from '../../atoms/popupAtom';

import { IoCloseSharp } from 'react-icons/io5';

type Props = {
    children: React.ReactNode;
};

export default function Popup({ children }: Props) {
    const [showPopup, setShowPopup] = useAtom(popup);
    const overlayRef = useRef<HTMLDivElement>(null);

    function closeViaOverlay(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === overlayRef.current) {
            setShowPopup(false);
        }
    }

    return (
        showPopup && (
            <div id='popup-overlay' ref={overlayRef} onMouseDown={(e) => closeViaOverlay(e)} className='fixed top-0 left-0 w-full h-full bg-black/50 z-50'>
                <div
                    id='popup-content'
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-9 min-h-[300px] min-w-[450px] shadow-lg shadow-black/50 rounded-xl flex flex-col justify-center items-start'>
                    {children}
                    <button onMouseDown={() => setShowPopup(false)} className='absolute top-1 right-1.5 self-end text-2xl text-blue-500 hover:underline'>
                        <IoCloseSharp />
                    </button>
                </div>
            </div>
        )
    );
}
