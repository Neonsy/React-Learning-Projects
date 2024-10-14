import Container from '../container';
import Nav from './nav';

export default function Header() {
    return (
        <header className='bg-slate-50/30 text-white'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
