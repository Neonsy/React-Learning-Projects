import { Link } from '@tanstack/react-router';

import Image from '../../components/image';
import heroImage from '../../assets/images/home/hero.webp';
import GridCard from './gridCard';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { FaWpforms } from 'react-icons/fa';
import { RiDragDropLine } from 'react-icons/ri';
import { GiWifiRouter } from 'react-icons/gi';
import { PiAtomFill } from 'react-icons/pi';
import { RiBearSmileLine } from 'react-icons/ri';

export default function HomePage() {
    return (
        <main className='flex flex-col gap-y-12'>
            <section className='relative h-[600px]'>
                <Image src={heroImage} alt='Hero Image' className='brightness-[0.36]' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center'>
                    <div className='mb-6 text-center'>
                        <h2 className='text-nowrap text-5xl font-bold mb-3'>Streamline your workflow</h2>
                        <p className='text-nowrap text-2xl font-bold'>A modern task manager with drag and drop functionality</p>
                    </div>
                    <Link
                        to='/app'
                        className='bg-blue-700 text-xl font-bold px-3 py-1.5 rounded-3xl hover:bg-blue-500 transition-colors active:scale-90'>
                        Get Started
                    </Link>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center gap-y-5 text-white'>
                <h2 className='font-bold'>Powered by modern technologies</h2>
                <div className='grid grid-rows-2 grid-cols-4 gap-y-3 gap-x-6'>
                    <GridCard iconClassName='text-blue-300' Icon={BiLogoTypescript} heading='TypeScript' description='A superset of JavaScript, with static typing' />
                    <GridCard iconClassName='text-sky-300' Icon={FaReact} heading='React' description='A JavaScript library for building user interfaces' />
                    <GridCard iconClassName='text-yellow-300' Icon={SiVite} heading='Vite' description='Next generation frontend tooling' />
                    <GridCard iconClassName='text-pink-300' Icon={FaWpforms} heading='React Hook Form' description='A library for form validation' />
                    <GridCard iconClassName='text-red-300' Icon={RiDragDropLine} heading='DND Kit' description='A drag and drop library' />
                    <GridCard iconClassName='text-slate-300' Icon={GiWifiRouter} heading='TanStack Router' description='A feature rich, type-safe routing library' />
                    <GridCard iconClassName='text-slate-300' Icon={PiAtomFill} heading='Jotai' description='A library for global atom based state management' />
                    <GridCard iconClassName='text-orange-300' Icon={RiBearSmileLine} heading='Zustand' description='A state management library and Redux alternative' />
                </div>
            </section>
        </main>
    );
}
