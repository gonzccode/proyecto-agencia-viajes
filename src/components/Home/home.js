import { MainCarousel } from './carousel';
import { Trips } from './trips';
import { Contact } from './contact';
import { Presentation } from './presentation';
import { ButtonFixed } from './buttonFixed';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.location.href = "#home"
    });

    return (
        <section id="home">
            <MainCarousel/>
            <Trips/>
            <Contact/>
            <Presentation/>
            <ButtonFixed/>
        </section>
    )
}

export { Home }