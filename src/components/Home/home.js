import { MainCarousel } from './carousel';
import { Trips } from './trips';
import { Contact } from './contact';
import { Presentation } from './presentation';

const Home = () => {
    return (
        <>
            <MainCarousel/>
            <Trips/>
            <Contact/>
            <Presentation/>
        </>
    )
}

export { Home }