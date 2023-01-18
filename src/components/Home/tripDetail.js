import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';
import { DetailTitle } from './detailTitle';
import { DetailData } from './detailData';
import { DetailInformation } from './detailInformation';

const TripDetail = ({tripList}) => {
  return (
    <section>
      <DetailTitle/>
      <div>
        <h2>próxima sálida</h2>
        <strong>{tripList.destination} {tripList.city}</strong>
      </div>
      <div>
        <Image src={tripList.image} alt={tripList.destination} width={1230} height={478}/>
      </div>
      <div>
        <h2>{tripList.title} {tripList.destination}</h2>
        <p>{tripList.text}</p>
        <Button variant="primary" size="lg" className="writeUsButton"><Image src={whatsappIcon} alt="icono de whatsapp"/> Consultános</Button>{' '}
      </div>
      <DetailData/>
      <hr/>
      <DetailInformation/>
  </section>
  )
}

export { TripDetail }; 