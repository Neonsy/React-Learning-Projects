import HeroSection from './sections/hero';
import TechnologiesSection from './sections/technologies';

export default function HomePage() {
    return (
        <main className='flex flex-col gap-y-12 mb-12'>
            <HeroSection />
            <TechnologiesSection />
        </main>
    );
}
