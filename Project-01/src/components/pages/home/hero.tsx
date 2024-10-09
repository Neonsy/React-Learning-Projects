import Container from '../../container';
import Button from '../../button';

export default function Hero() {
    return (
        <section>
            <Container className='flex flex-col items-center justify-center gap-y-5 py-12'>
                <h2 className='font-bold'>Compare Shops Instantly</h2>
                <p className='text-2xl text-slate-500'>Powered by modern web technologies</p>
                <Button type='home' />
            </Container>
        </section>
    );
}
