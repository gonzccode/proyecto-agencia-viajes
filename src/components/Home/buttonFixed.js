import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';

const ButtonFixed = () => {
    return (
        <div id="buttonFixed">
            <a  href="https://wa.me/+5492323533332" target="_blank">
                <Button variant="primary" size="lg" className="writeUsButton"><Image src={whatsappIcon} alt="icono de whatsapp"/> ¡Escribenos!</Button>{' '}
            </a>
        </div>
    )
}

export { ButtonFixed } 