import { Link } from '@tanstack/react-router';
import Container from '../../container';

export default function Hero() {
    return (
        <section>
            <Container className='flex flex-col items-center justify-center gap-y-5 py-12'>
                <h2 className='font-bold'>Compare Shops Instantly</h2>
                <p className='text-2xl text-slate-500'>Powered by modern web technologies</p>
                <Link
                    to='/app'
                    className='mt-5 bg-slate-950 text-white text-lg px-12 py-5 rounded-xl hover:transition-all hover:outline hover:outline-2 hover:outline-blue-500 active:transition-none active:scale-90'>
                    Check out the App
                </Link>
            </Container>
        </section>
    );
}
