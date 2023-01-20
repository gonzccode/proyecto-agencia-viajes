import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DistinguishedTripItem } from './distinguishedTripItem';
import Stack from 'react-bootstrap/Stack';

const DistinguishedTripsList = ({ distinguishedTripsList }) => {
    return (
        <Container>
            <Row>
                <Stack direction="horizontal" className="tripsSectionCards">
                    {distinguishedTripsList.map(distinguishedTrip => <DistinguishedTripItem key={distinguishedTrip.id} distinguishedTrip={distinguishedTrip}/>)}
                </Stack>
            </Row>
        </Container>
    )
}

export { DistinguishedTripsList };