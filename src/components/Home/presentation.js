import Image from 'react-bootstrap/Image';
import lasClarisasFoto from '../../assets/img/las_clarisas_foto.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import arrowIcon from '../../assets/img/arrow_icon.png'


const Presentation = () => {
    return (
        <section>
            <div className="rectangularSubtitleContainers">
                    <div className="purpleBgSubtitleContainer">
                        <h2 className="whiteSubtitles">Nosotras</h2>
                    </div>
            </div>
            <Container>
                <Row id="clarisasInformationMobile">
                    <Col id="clarisasInformationCol">
                        <div>
                            <h3 id="questionSubtitle">¿Quiénes somos?</h3>
                            <h4 id="presentationSubtitle">Somos Profesionales en turismo</h4>
                            <p>En principio, cuando alguien decide <br/>estudiar turismo lo primero que suelen <br/> decirte es 
                                “Ay que linda carrera” y “vas a <br/>vivir viajando” o te miran con cara rara y te <br/>preguntan
                                ¿Eso se estudia?</p>
                            <Button variant="primary" size="lg" id="knowUsButton" href='/nosotras'>CONOCE NUESTRA HISTORIA <Image src={arrowIcon} alt="icono de flecha"/></Button>{' '}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Image src={lasClarisasFoto} alt="imagen de nosotras" id="clarisasImage" fluid/> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export { Presentation }