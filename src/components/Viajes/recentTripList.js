import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { RecentTripItem } from './recentTripItem';
import Stack from 'react-bootstrap/Stack';

const RecentTripsList = ({ recentTripsList }) => {
    return (
        <Container>
            <Row>
                <Stack direction="horizontal" className="tripsSectionCards">
                    {recentTripsList.map(recentTrip => <RecentTripItem key={recentTrip.id}recentTrip={recentTrip}/>)}
                </Stack>
            </Row>
        </Container>
    )
}

export { RecentTripsList };