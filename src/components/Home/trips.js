import Stack from 'react-bootstrap/Stack';
import { TripsListContainer } from './tripListContainer';
import Button from 'react-bootstrap/Button';
import arrowIcon from '../../assets/img/arrow_icon.png';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

const Trips = () => {
  return (
    <section>
      <div className="rectangularSubtitleContainers">
        <div className="purpleBgSubtitleContainer">
          <h2 className="secondarySubtitles whiteSubtitles">Próximos Viajes</h2>
        </div>
      </div>
      <div id="frecuentJourneysSubtitleContainer">
        <h2 className="secondarySubtitles"><b id="frecuentJourneys">Salidas frecuentes,</b> <b id="travelWithUs">¡Viajá con nosotras!</b></h2>
        <NavLink to="/viajes">
          <Button variant="primary" size="lg" id="mobileNextTripsButton">Ver próximos viajes <Image src={arrowIcon} alt="icono de flecha"/></Button>{' '}
        </NavLink>
      </div>
      {/* <Stack direction="horizontal"> */}
      <Stack>
        <div id="mobileCardsCarousel">
          <TripsListContainer/>
        </div>
      </Stack>
    </section>
  )
}

export { Trips }