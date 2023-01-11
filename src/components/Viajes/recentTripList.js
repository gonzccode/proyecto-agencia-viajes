import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { RecentTripItem } from './recentTripItem';
import Stack from 'react-bootstrap/Stack';

const RecentTripList = ({ recentTripList }) => {
    return (
        <Container>
            <Row>
                <Stack direction="horizontal" className="tripsSectionCards">
                    {recentTripList.map(recentTrip => <RecentTripItem recentTrip={recentTrip}/>)}
                </Stack>
            </Row>
        </Container>
    )
}

export { RecentTripList };