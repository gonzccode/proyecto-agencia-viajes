import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image';
import instagramIcon from '../assets/img/instagram_icon.png';
import facebookIcon from '../assets/img/facebook_icon.png';
import emailIcon from '../assets/img/email_icon.png';
import whatsappIcon from '../assets/img/whatsapp_icon.png';
import youtubeIcon from '../assets/img/youtube_icon.png';
import facebookMobileIcon from '../assets/img/logo_facebook_mobile.png';
import instagramMobileIcon from '../assets/img/logo_instagram_mobile.png';
import whatsappMobileIcon from '../assets/img/logo_whatsapp_mobile.png';
import youtubeMobileIcon from '../assets/img/logo_youtube_mobile.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Stack direction="horizontal" id="complaintContainerSection">
                <div id="complaintContainer">
                    <a  href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="lg" id="regretButton">BOTÓN DE ARREPENTIMIENTO</Button>{' '}
                    </a>
                    <p><b>Ley 24.240 -<br/>Autoridad Nacional de aplicación<br/> Defensa del Consumidor,<br/></b> para realizar reclamos ingrese <a href='https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes' target="_blank" rel="noopener noreferrer">aquí<br/> (DENUNCIA CONTRA UNA AGENCIA)</a></p>
                </div>
                <hr className="footerLines"/>
                <div>
                    <NavLink to="/">
                        <Image src={logo} alt="logo" id="footerLogo"/>
                    </NavLink>
                    <div id="mobileMediaLogos">
                        <a href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer">
                            <Image src={whatsappMobileIcon} alt="whastapp icono" width={39.69} height={40}/>
                        </a>
                        <a href="https://www.youtube.com/@lasclarisas" target="_blank" rel="noopener noreferrer">
                            <Image src={youtubeMobileIcon} alt="youtube icono"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100086243602373" target="_blank" rel="noopener noreferrer">
                            <Image src={facebookMobileIcon} alt="facebook icono"/>
                        </a>
                        <a href="https://www.instagram.com/lasclarisastours/" target="_blank" rel="noopener noreferrer">
                            <Image src={instagramMobileIcon} alt="instagram icono"/>
                        </a>
                    </div>
                </div>
                <hr className="footerLines"/>
                <div id="desktopButtonsContainer">
                    <a href="https://www.youtube.com/@lasclarisas" target="_blank" rel="noopener noreferrer" className="socialMediaLinks">
                        <Button variant="outline-primary" className="socialMediaButtons">YOUTUBE <Image src={youtubeIcon} alt="icono de youtube" className="socialMediaIcons"/></Button>{' '}
                    </a>
                    <a href="https://www.instagram.com/lasclarisastours/" target="_blank" rel="noopener noreferrer" className="socialMediaLinks">
                        <Button variant="outline-primary" className="socialMediaButtons">INSTAGRAM <Image src={instagramIcon} alt="icono de instagram" className="socialMediaIcons"/></Button>{' '}
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100086243602373" target="_blank" rel="noopener noreferrer" className="socialMediaLinks">
                        <Button variant="outline-primary" className="socialMediaButtons">FACEBOOK <Image src={facebookIcon} alt="icono de facebook" className="socialMediaIcons"/></Button>{' '}
                    </a>
                </div>
                <div id="footerNavbarContainer">
                    <nav className='footerNavbar'>
                        <NavLink to="/viajes" className="navLinks">
                            <strong>Viajes</strong>
                        </NavLink>
                        <NavLink to="/ayuda" className="navLinks">
                            <strong>Ayuda</strong>
                        </NavLink>
                        <NavLink to="/contacto" className="navLinks">
                            <strong>Contacto</strong>
                        </NavLink>
                        <NavLink to="/nosotras" className="navLinks">
                            <strong>Nosotras</strong>
                        </NavLink>
                    </nav>
                </div>
            </Stack>
            <section id="consumerProtectionSection">
                <div>
                    <strong>
                    Dirección General de Defensa y Protección al Consumidor - Consultas y/o denuncias <br/>
                    El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los 
                    mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un 
                    interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la 
                    Ley Nº 25.326". "La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, 
                    Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y 
                    reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de 
                    datos personales.
                    </strong>
                </div>
            </section>
            <Stack direction="horizontal" id="footerDataContainer">
                <div>
                    <a href="mailto:lasclarisastours@gmail.com" target="_blank" rel="noopener noreferrer" className="footerDataIconsBoxes footerDataBoxes mailLink">
                        <Image src={emailIcon} alt="icono email" width={20} height={16} className="footerIcons"/>
                        <p className="footerDataText">lasclarisastours@gmail.com</p>
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer" className="footerDataIconsBoxes footerDataBoxes whatsAppLink">
                        <Image src={whatsappIcon} alt="icono whatsapp" width={19.9} height={20} className="footerIcons"/>
                        <p className="footerDataText">+54 2323 53 3332</p>
                    </a>
                </div>
                <div className=" footerDataBoxes">
                    <p className="footerDataText">Cuit: 27-22860360-6</p>
                </div>
                <div className=" footerDataBoxes">
                    <p className="footerDataText">FERRARI ANDREA LILIANA Permiso Precario nro. 2022-122124155</p>
                </div>
            </Stack>
            <div id="purpleEndLine">

            </div>
        </footer>
    )
}

export { Footer };