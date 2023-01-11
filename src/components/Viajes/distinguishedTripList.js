import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DistinguishedTripItem } from './distinguishedTripItem';
import Stack from 'react-bootstrap/Stack';

const DistinguishedTripList = ({ distinguishedTripList }) => {
    return (
        <Container>
            <Row>
                <Stack direction="horizontal" className="tripsSectionCards">
                    {distinguishedTripList.map(distinguishedTrip => <DistinguishedTripItem distinguishedTrip={distinguishedTrip}/>)}
                </Stack>
            </Row>
        </Container>
    )
}

export { DistinguishedTripList };