import Image from '../components/image';

import heroImage from '../assets/images/home/hero.webp';

export default function HomePage() {
    return (
        <main>
            <Image src={heroImage} alt='Hero Image' className='w-1/2 mx-auto'/>
        </main>
    );
}
