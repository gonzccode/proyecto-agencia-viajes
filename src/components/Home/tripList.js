import { TripItem } from './tripItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const TripList = ({ tripList }) => {

    return (
        <Container id="homeTripCardsContainer">
            <Row>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                        {tripList.map(trip => 
                        <SwiperSlide key={trip.id} id="homeTripCards">
                            <TripItem trip={trip}/>
                        </SwiperSlide>
                            )}
            </Swiper>
            </Row>
        </Container>
    )
}

export { TripList }