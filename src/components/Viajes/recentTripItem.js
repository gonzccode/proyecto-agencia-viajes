import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecentTripItem = ({ recentTrip }) => {
    return (
        <Card style={{ width: '24rem' }} className="cards">
            <Card.Img src={recentTrip.image} alt={recentTrip.destination} width={286} height={180} className="cardsImage"/>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title className="cardTitle">{recentTrip.destination}</Card.Title>
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

export { RecentTripItem };