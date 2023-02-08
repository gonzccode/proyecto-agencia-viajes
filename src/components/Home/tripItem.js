import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const TripItem = ({ trip }) => {

    return (
        <Card style={{ width: '24rem' }} className="cards">
            <Card.Img src={trip.image} alt={trip.destination} width={286} height={180} className="cardsImage"/>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Subtitle className="mb-2 cardSubtitle">Próxima salida</Card.Subtitle>
                            <Card.Title className="cardTitle">{trip.destination}</Card.Title>
                        </Col>
                        <Col className="cardButtonContainers">
                            <NavLink to="/viajes">
                                <Button variant="primary" className="seeTripsButtons pinkHoverButtons">VER VIAJES</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export { TripItem } 