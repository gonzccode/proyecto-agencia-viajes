import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import facebookIcon from '../../assets/img/facebook-icon.png';
import instagramIcon from '../../assets/img/instagram-icon.png';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';

const Contact = () => {
  return (
    <>
        <div>
            <h2>Escribenos para más información</h2>
        </div>
        <Stack direction="horizontal"> 
            <Button variant="primary" size="lg"><Image src={whatsappIcon} alt="logo whatsapp" className="contactButtons"/></Button>{' '}
            <Button variant="primary" size="lg"><Image src={instagramIcon} alt="logo instagram" className="contactButtons"/></Button>{' '}
            <Button variant="primary" size="lg"><Image src={facebookIcon} alt="logo facebook" className="contactButtons"/></Button>{' '}
        </Stack>
    </>
  )
}

export { Contact } 