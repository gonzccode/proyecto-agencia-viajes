import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const DistinguishedTripItem = ({ distinguishedTrip }) => {
    return (
        <Card style={{ width: '24rem' }} className="cards">
            <Card.Img src={distinguishedTrip.image} alt={distinguishedTrip.destination} width={286} height={180} className="cardsImage"/>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title className="cardTitle">{distinguishedTrip.destination}</Card.Title>
                        </Col>
                        <Col className="cardButtonContainers">
                            <NavLink to={`detalle/${distinguishedTrip.id}`}>
                                <Button variant="primary" className="seeMoreButtons">VER MÁS</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export { DistinguishedTripItem };