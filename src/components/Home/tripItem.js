import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TripItem = ({ trip }) => {
    console.log(trip);

    return (
        <Card style={{ width: '24rem' }} className="cards">
            <Card.Img src={trip.image} alt={trip.destination} width={286} height={180} className="cardsImage"/>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Subtitle className="mb-2 cardSubtitle">Próxima sálida</Card.Subtitle>
                            <Card.Title className="cardTitle">{trip.destination}</Card.Title>
                        </Col>
                        <Col className="cardButtonContainers">
                            <Button variant="primary" className="seeMoreButtons">VER MÁS</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export { TripItem } 