import { Link } from '@tanstack/react-router';

import { VscGithub } from 'react-icons/vsc';
import { MdOutlineTaskAlt } from 'react-icons/md';

export default function Nav() {
    return (
        <nav className='py-2.5 flex justify-between items-center'>
            <Link to='/' className='flex items-center gap-x-3'>
                <MdOutlineTaskAlt className='bg-white p-0.5 text-2xl rounded-full text-[#0B3F63]' />
                <h1 className='font-bold'>TaskSnapSpace</h1>
            </Link>

            <ul className='flex gap-x-5 items-center'>
                <li>
                    <Link to='/' className='hover:underline' activeProps={{ className: 'text-[#08e2ff] font-medium' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/app' className='hover:underline' activeProps={{ className: 'text-[#08e2ff] font-medium' }}>
                        App
                    </Link>
                </li>
                <li>
                    <a
                        href='https://github.com/Neonsy/React-Learning-State-Management/tree/Task-Snap-Space/Task%20Snap%20Space'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='flex items-center'>
                        <VscGithub className='text-3xl' />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
