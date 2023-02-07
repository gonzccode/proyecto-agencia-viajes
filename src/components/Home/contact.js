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
        <a href="https://wa.me/+5492323533332" target="_blank">
          <Button variant="primary" size="lg" className="contactButtons pinkHoverButtons"><Image src={whatsappIcon} alt="logo whatsapp"  className="contactLogos" width={78} height={78}/></Button>{' '}
        </a>
        <a href="https://www.instagram.com/lasclarisastours/" target="_blank">
          <Button variant="primary" size="lg" className="contactButtons pinkHoverButtons"><Image src={instagramIcon} alt="logo instagram" className="contactLogos" /></Button>{' '}
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086243602373" target="_blank">
          <Button variant="primary" size="lg" className="contactButtons pinkHoverButtons"><Image src={facebookIcon} alt="logo facebook" className="contactLogos" /></Button>{' '}
        </a>
        </Stack>
    </section>
  )
}

export { Contact } 