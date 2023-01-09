import { TripItem } from './tripItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Swiper, SwiperSlide } from 'swiper/react';

const TripList = ({ tripList }) => {

    return (
        <Container>
            <Row id="homeTripCards">
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                        {tripList.map(trip => 
                        <SwiperSlide key={trip.id}>
                            <TripItem trip={trip}/>
                        </SwiperSlide>
                            )}
            </Swiper>
            </Row>
        </Container>
    )
}

export { TripList }