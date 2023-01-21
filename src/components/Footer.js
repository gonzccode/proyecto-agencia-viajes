import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image';
import instagramIcon from '../assets/img/instagram_icon.png';
import facebookIcon from '../assets/img/facebook_icon.png';
import dataFiscalAfip from '../assets/img/data_fiscal_afip.png';
import emailIcon from '../assets/img/email_icon.png';
import whatsappIcon from '../assets/img/whatsapp_icon.png';
import youtubeIcon from '../assets/img/youtube_icon.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Stack direction="horizontal" id="complaintContainerSection">
                <div id="complaintContainer">
                    <Button variant="primary" size="lg" id="regretButton">BOTON DE ARREPENTIMIENTO</Button>{' '}
                    <p><b>Ley 24.240 -<br/>Autoridad Nacional de aplicación<br/> Defensa del Consumidor,<br/></b> para realizar reclamos ingrese <a href='#'>aquí<br/> (DENUNCIA CONTRA UNA AGENCIA)</a></p>
                </div>
                <div>
                    <NavLink to="/">
                        <Image src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <div id="buttonsContainer">
                    <Button variant="outline-primary" className="socialMediaButtons">YOUTUBE <Image src={youtubeIcon} alt="icono de youtube" className="socialMediaIcons"/></Button>{' '}
                    <Button variant="outline-primary" className="socialMediaButtons">INSTAGRAM <Image src={instagramIcon} alt="icono de instagram" className="socialMediaIcons"/></Button>{' '}
                    <Button variant="outline-primary" className="socialMediaButtons">FACEBOOK <Image src={facebookIcon} alt="icono de facebook" className="socialMediaIcons"/></Button>{' '}
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
                    <Image src={dataFiscalAfip} alt="data fiscal afip qr"/>
                </div>
            </Stack>
            <section id="consumerProtectionSection">
                <div id="consumerProtectionTextContainer">
                    <strong className="consumerProductionText">
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
            </Stack>
        </footer>
    )
}

export { Footer };