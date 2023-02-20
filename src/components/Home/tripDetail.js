import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';
import { DetailData } from './detailData';
import { DetailInformation } from './detailInformation';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const TripDetail = ({tripList}) => {
  return (
    <section>
      <div id="detailDestinationContainer">
        <h2 className="mobileDestinationSubtitles">próxima salida</h2>
        <p className="mobileDestinationSubtitles"><b className="tripDestination">{tripList.destination}</b> <b id="tripCity">{tripList.city}</b></p>
      </div>
      <div id="detailImageContainer">
        <Image src={tripList.image} alt={tripList.destination} fluid/>
      </div>
      <Container>
        <Row id="mobileDetailInformationContainer">
          <Col id="detailTextCol">
            <h2>{tripList.title} <b className="tripDestination">{tripList.destination}</b></h2>
            <p>{tripList.text}</p>
          </Col>
          <Col id="detailButtonCol">
            <div>
              <a  href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="writeUsButton"><Image src={whatsappIcon} alt="icono de whatsapp"/> Consultanos</Button>{' '}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <DetailData/>
      <hr id="detailLine"/>
      <DetailInformation/>
  </section>
  )
}

export { TripDetail }; 