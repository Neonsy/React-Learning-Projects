import { LuCopyright } from 'react-icons/lu';
import { currentYear } from '../../lib/functions/dateTime';
import Container from '../container';

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-slate-300'>
            <Container className='flex flex-col justify-center items-center gap-y-5 h-full'>
                <div className='text-center'>
                    <p>This Project exists solely for educational purposes.</p>
                    <p>The data is pulled from a custom source, meant to mimic a real API, using fake data.</p>
                </div>
                <p className='flex items-center'>
                    <span className='mr-0.5'>Copyright</span>
                    <LuCopyright /> {currentYear}
                </p>
            </Container>
        </footer>
    );
}
