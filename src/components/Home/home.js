import { MainCarousel } from './carousel';
import { Trips } from './trips';
import { Contact } from './contact';
import { Presentation } from './presentation';
import { ButtonFixed } from './buttonFixed';

const Home = () => {
    return (
        <>
            <MainCarousel/>
            <Trips/>
            <Contact/>
            <Presentation/>
            <ButtonFixed/>
        </>
    )
}

export { Home }