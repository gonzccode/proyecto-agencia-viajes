import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image'

const Footer = () => {
    return (
        <footer>
            <Stack direction="horizontal">
                <div>
                    <Button variant="primary" size="lg" className="regretButton">BOTON DE ARREPENTIMIENTO</Button>{' '}
                    <p><b>Ley 24.240 -<br/>Autoridad Nacional de aplicación<br/> Defensa del Consumidor<br/></b>, para realizar reclamos ingrese <a href='#'>aquí<br/> (DENUNCIA CONTRA UNA AGENCIA)</a></p>
                </div>
                <div>
                    <Image src={logo} alt="logo"/>
                </div>
                <div>
                    <Button variant="outline-primary">Primary</Button>{' '}
                    <Button variant="outline-primary">Primary</Button>{' '}
                </div>
                <div>
                    
                </div>
            </Stack>
        </footer>
    )
}

export { Footer };