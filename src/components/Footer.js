import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image';
import instagramIcon from '../assets/img/instagram_icon.png';
import facebookIcon from '../assets/img/facebook_icon.png';
import dataFiscalAfip from '../assets/img/data_fiscal_afip.png';
import emailIcon from '../assets/img/email_icon.png';
import whatsappIcon from '../assets/img/whatsapp_icon.png';
import locationIcon from '../assets/img/location_icon.png';


const Footer = () => {
    return (
        <footer>
            <Stack direction="horizontal">
                <div id="complaintContainer">
                    <Button variant="primary" size="lg" className="regretButton">BOTON DE ARREPENTIMIENTO</Button>{' '}
                    <p><b>Ley 24.240 -<br/>Autoridad Nacional de aplicación<br/> Defensa del Consumidor,<br/></b> para realizar reclamos ingrese <a href='#'>aquí<br/> (DENUNCIA CONTRA UNA AGENCIA)</a></p>
                </div>
                <div id="logoContainer">
                    <Image src={logo} alt="logo"/>
                </div>
                <div id="buttonsContainer">
                    <Button variant="outline-primary" className="socialMediaButtons">INSTAGRAM <Image src={instagramIcon} alt="icono de instagram" className="socialMediaIcons"/></Button>{' '}
                    <Button variant="outline-primary" className="socialMediaButtons">FACEBOOK <Image src={facebookIcon} alt="icono de facebook" className="socialMediaIcons"/></Button>{' '}
                </div>
                <div id="footerNavbarContainer">
                    <nav className='footerNavbar'>
                        <a className="viewsLinks">Viajes</a>
                        <a className="viewsLinks">Ayuda</a>
                        <a className="viewsLinks">Contacto</a>
                        <a className="viewsLinks">Nosotros</a>
                    </nav>
                    <Image src={dataFiscalAfip} alt="data fiscal afip qr"/>
                </div>
            </Stack>
            <Stack direction="horizontal" id="footerDataContainer">
                <div className="footerDataIconsBoxes footerDataBoxes">
                    <Image src={emailIcon} alt="icono email" width={20} height={16} className="footerIcons"/>
                    <p className="footerDataText">lasclarisastours@gmail.com</p>
                </div>
                <div className="footerDataIconsBoxes footerDataBoxes">
                    <Image src={whatsappIcon} alt="icono whatsapp" width={19.9} height={20} className="footerIcons"/>
                    <p className="footerDataText">+54 2323 53 3332</p>
                </div>
                <div className=" footerDataBoxes">
                    <p className="footerDataText">Cuit:  27-22860360--6</p>
                </div>
                <div className=" footerDataBoxes">
                    <p className="footerDataText">FERRARI ANDREA LILIANA Permiso Precario nro. 2022-122124155</p>
                </div>
                <div className="footerDataIconsBoxes footerDataBoxes">
                    <Image src={locationIcon} alt="icono localización" width={15.59} height={20} className="footerIcons"/>
                    <p className="footerDataText">Buenos Aires, Argentina</p>
                </div>
            </Stack>
        </footer>
    )
}

export { Footer };