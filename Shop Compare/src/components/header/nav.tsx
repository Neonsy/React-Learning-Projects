import { Link } from '@tanstack/react-router';
import { BiShoppingBag } from 'react-icons/bi';
import { VscGithub } from 'react-icons/vsc';
import Container from '../container';

export default function Nav() {
    return (
        <Container>
            <nav className='flex items-center justify-between py-5'>
                <Link className='flex items-center gap-x-3' to='/'>
                    <BiShoppingBag className='text-5xl mb-2 text-blue-500' />
                    <h1 className='text-blue-500'>ShopCompare</h1>
                </Link>

                <ul className='flex items-center gap-x-5 text-lg'>
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
                    <li>
                        <a
                            href='https://github.com/Neonsy/React-Learning-State-Management/tree/Shop-Compare/Shop%20Compare'
                            target='_blank'
                            rel='noreferrer noopener'
                            className='flex items-center'>
                            <VscGithub className='text-3xl' />
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
