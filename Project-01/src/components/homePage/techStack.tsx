import { FaReact } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { MdRouter } from 'react-icons/md';
import { CiDatabase } from 'react-icons/ci';
import { LuAtom } from 'react-icons/lu';
import { GiBearFace } from 'react-icons/gi';

import Container from '../container';

export default function TechStackSection() {
    return (
        <section>
            <Container className='flex flex-col items-center justify-center gap-y-5 py-5'>
                <h2>The Tech Stack</h2>

                <div className='grid grid-cols-4 grid-rows-2 gap-4 py-5'>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <SiTypescript className='text-6xl text-blue-800' />
                        <h3 className='font-bold'>TypeScript</h3>
                        <p className='text-center'>A typed superset of JavaScript for better code quality.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <FaReact className='text-6xl text-sky-500' />
                        <h3 className='font-bold'>React</h3>
                        <p className='text-center'>A library for building dynamic user interfaces.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <TbBrandVite className='text-6xl text-yellow-500' />
                        <h3 className='font-bold'>Vite</h3>
                        <p className='text-center'>A fast frontend build tool with instant server start.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <BiLogoTailwindCss className='text-6xl text-sky-600' />
                        <h3 className='font-bold'>Tailwind</h3>
                        <p className='text-center'>A utility-first CSS framework for custom designs.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <MdRouter className='text-6xl text-slate-700' />
                        <h3 className='font-bold'>TanStackRouter</h3>
                        <p className='text-center'>A flexible routing library for React applications.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <CiDatabase className='text-6xl text-indigo-500' />
                        <h3 className='font-bold'>TanStackQuery</h3>
                        <p className='text-center'>A data-fetching library for React with caching support.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <LuAtom className='text-6xl text-orange-500' />
                        <h3 className='font-bold'>Jotai</h3>
                        <p className='text-center'>A minimalist state management library for React.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white shadow-xl px-4 py-12 gap-y-5 rounded-lg hover:scale-105 transition-transform'>
                        <GiBearFace className='text-6xl text-amber-900' />
                        <h3 className='font-bold'>Zustand</h3>
                        <p className='text-center'>A simple and scalable state management solution.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
