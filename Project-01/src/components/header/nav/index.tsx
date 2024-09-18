import { Link } from '@tanstack/react-router';

export default function Nav() {
    return (
        <nav className='w-full flex justify-around'>
            <h1>Pretending to be a nav... for now</h1>
            <ul className='flex gap-x-5'>
                <li>
                    <Link className='hover:underline [&.active]:font-bold' to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='hover:underline [&.active]:font-bold' to='/app'>
                        App
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
