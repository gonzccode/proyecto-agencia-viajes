import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';

const TripDetail = ({tripList}) => {
  return (
    <section>
      <div className="rectangularSubtitleContainers">
          <div className="purpleBgSubtitleContainer">
              <h1 className="whiteSubtitles">Destinos para vos</h1>
          </div>
      </div>
      <div>
        <p>próxima sálida</p>
        <p>{tripList.destination} {tripList.city}</p>
      </div>
      <div>
        <Image src={tripList.image} alt={tripList.destination} width={1230} height={478}/>
      </div>
      <div>
        <h2>{tripList.title} {tripList.destination}</h2>
        <p>{tripList.text}</p>
        <Button variant="primary" size="lg" className="writeUsButton"><Image src={whatsappIcon} alt="icono de whatsapp"/> Consultános</Button>{' '}
      </div>
      <div id="tripInformationContainer">
        <div>
          <h3>Salida y duración:</h3>
          <div className="purpleBgSubtitleContainer whiteSubtitles">Consultar fecha + info</div>
        </div>
      </div>
      <div>
        <Button></Button>
        <Button></Button>
      </div>
  </section>
  )
}

export { TripDetail }; 