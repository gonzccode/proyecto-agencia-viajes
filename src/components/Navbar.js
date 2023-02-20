import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsList } from 'react-icons/bs';
import busIcon from '../assets/img/offcanvas_bus.png';
import contactIcon from '../assets/img/offcanvas_contact.png';
import facebookIcon from '../assets/img/offcanvas_facebook.png';
import instagramIcon from '../assets/img/offcanvas_instagram.png';
import questionIcon from '../assets/img/offcanvas_question.png';
import whatsappIcon from '../assets/img/offcanvas_whatsapp.png';
import youtubeIcon from '../assets/img/offcanvas_youtube.png';

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>

      <Navbar id="navbar">
        <Container id="mobileNavbar">
          <BsList className="d-lg-none" onClick={handleShow}/>
            <NavLink to="/">
              <Image src={logo} alt="logo" className="logo"/>
            </NavLink>
            <Nav className="me-auto views">
              <NavLink to="/viajes" className="navLinks">
                <strong>Viajes</strong>
              </NavLink>
              <NavLink to="/ayuda" className="navLinks" replace >
                <strong>Ayuda</strong>
              </NavLink>
              <NavLink to="/nosotras" className="navLinks">
                <strong>Nosotras</strong>
              </NavLink>
              <NavLink to="/contacto" className="navLinks">
                <strong>Contacto</strong>
              </NavLink>
            </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton id="offcanvasHeader">
          <Offcanvas.Title>
            <p><b id="offcanvasWelcome">¡Bienvenido!</b> <br/> <b id="offcanvasClarisasTitle">Las Clarisas Tours</b></p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="offcanvasBody">
          <Navbar>
                <Nav>
                  <Stack direction="vertical" className="offcanvasNavContainer">
                    <NavLink to="/viajes" className="offcanvasNavLinks">
                      <strong><Image src={busIcon} alt="icono bus" className="offcanvasIcons"/>viajes</strong>
                    </NavLink>
                    <NavLink to="/ayuda" className="offcanvasNavLinks">
                      <strong><Image src={questionIcon} alt="icono pregunta" className="offcanvasIcons"/>ayuda</strong>
                    </NavLink>
                    <NavLink to="/nosotras" className="offcanvasNavLinks">
                      <strong><Image src={contactIcon} alt="icono contacto" className="offcanvasIcons"/>nosotras</strong>
                    </NavLink>
                    <NavLink to="/contacto" className="offcanvasNavLinks">
                      <strong><Image src={whatsappIcon} alt="icono whatsapp" className="offcanvasIcons"/>contacto</strong>
                    </NavLink>
                  </Stack>
                </Nav>
          </Navbar>
          <hr id="offcanvasLine"/>
          <Navbar>
                <Nav>
                  <Stack direction="vertical" className="offcanvasNavContainer">
                    <a href="https://www.facebook.com/profile.php?id=100086243602373" target="_blank" rel="noopener noreferrer" className="offcanvasNavLinks">
                      <strong><Image src={facebookIcon} alt="icono bus" className="offcanvasIcons"/>facebook</strong>
                    </a>
                    <a href="https://www.instagram.com/lasclarisastours/" target="_blank" rel="noopener noreferrer" className="offcanvasNavLinks">
                      <strong><Image src={instagramIcon} alt="icono pregunta" className="offcanvasIcons"/>blog de viajes</strong>
                    </a>
                    <a href="https://www.youtube.com/@lasclarisas" target="_blank" rel="noopener noreferrer" className="offcanvasNavLinks">
                      <strong><Image src={youtubeIcon} alt="icono contacto" id="offcanvasYoutubeIcon" className="offcanvasIcons"/>youtube</strong>
                    </a>
                  </Stack>
                </Nav>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
      {/*
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
          <NavLink to="/">
            <Image src={logo} alt="logo" className="logo"/>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto views">
              <NavLink to="/viajes" className="navLinks">
                <strong>Viajes</strong>
              </NavLink>
              <NavLink to="/ayuda" className="navLinks" replace >
                <strong>Ayuda</strong>
              </NavLink>
              <NavLink to="/nosotras" className="navLinks">
                <strong>Nosotras</strong>
              </NavLink>
              <NavLink to="/contacto" className="navLinks">
                <strong>Contacto</strong>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    */}
    </header>
  )
}

export { NavigationBar };
