import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import whatsappIcon from '../../assets/img/whatsapp-icon.png';

const ButtonFixed = () => {
    return (
        <div id="buttonFixed">
            <Button variant="primary" size="lg" id="writeUsButton"><Image src={whatsappIcon} alt="icono de whatsapp"/> ¡Escribenos!</Button>{' '}
        </div>
    )
}

export { ButtonFixed } 