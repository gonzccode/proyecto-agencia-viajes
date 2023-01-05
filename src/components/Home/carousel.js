import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cerro7Colores from '../../assets/img/cerro_7_colores.png';
import teatroColon from '../../assets/img/teatro_colon.png';
import museoDeTigre from '../../assets/img/museo_de_tigre.png';
import carnavalGualeguaychu from '../../assets/img/carnaval_gualeguaychu.png';

const MainCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={cerro7Colores}
                alt="cerro 7 colores"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={teatroColon}
                alt="teatro colon"
            />
    
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={museoDeTigre}
                alt="museo de tigre"
            />
    
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={carnavalGualeguaychu}
                alt="Fourth slide"
            />
    
            <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
}

export { MainCarousel };