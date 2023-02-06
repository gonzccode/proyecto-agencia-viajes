import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import arrowIcon from '../../assets/img/arrow_icon.png'
import cerro7Colores from '../../assets/img/cerro_7_colores.png';
import teatroColon from '../../assets/img/teatro_colon.png';
import museoDeTigre from '../../assets/img/museo_de_tigre.png';
import carnavalGualeguaychu from '../../assets/img/carnaval_gualeguaychu.png';
import { NavLink } from 'react-router-dom';

const MainCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section>
            <div className="carouselContainers">
                <div id="mainTitleContainer">
                    <h1 id="mainTitle">¡Sumate a experiencias inolvidables <br/>activando todos tus sentidos!</h1>
                </div>
            </div>
            <div className="carouselContainers">
                <div id="mainSubtitleContainer">
                    <h2 id="mainSubtitle">Las Clarisas Tours - Profesionales en Turismo</h2>
                </div>
            </div>
            <div className="carouselContainers">
                <div id="carouselButtonContainer">
                    <NavLink to="/viajes">
                        <Button variant="primary" size="lg" id="seeNextTripsButton">Ver próximos viajes <Image src={arrowIcon} alt="icono de flecha"/></Button>{' '}
                    </NavLink>
                </div>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cerro7Colores}
                    alt="cerro 7 colores"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={teatroColon}
                    alt="teatro colon"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={museoDeTigre}
                    alt="museo de tigre"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carnavalGualeguaychu}
                    alt="Fourth slide"
                />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export { MainCarousel };