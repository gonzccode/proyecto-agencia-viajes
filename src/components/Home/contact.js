import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import facebookIcon from '../../assets/img/facebook-icon.png';
import instagramIcon from '../../assets/img/instagram-icon.png';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';

const Contact = () => {
  return (
    <section>
        <div>
            <h2 className="secondarySubtitles" id="writeUs">Escribenos para más información</h2>
        </div>
        <Stack direction="horizontal" id="contactButtonsContainer"> 
            <Button variant="primary" size="lg" className="contactButtons"><Image src={whatsappIcon} alt="logo whatsapp"  className="contactLogos"/></Button>{' '}
            <Button variant="primary" size="lg" className="contactButtons"><Image src={instagramIcon} alt="logo instagram" className="contactLogos" /></Button>{' '}
            <Button variant="primary" size="lg" className="contactButtons"><Image src={facebookIcon} alt="logo facebook" className="contactLogos" /></Button>{' '}
        </Stack>
    </section>
  )
}

export { Contact } 