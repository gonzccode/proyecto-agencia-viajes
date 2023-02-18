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
        <Offcanvas.Body>
          <Navbar>
            <Container>
                <Nav>
                  <Stack direction="vertical" id="offcanvasNavContainer">
                    <NavLink to="/viajes" className="offcanvasNavLinks">
                      <strong>viajes</strong>
                    </NavLink>
                    <NavLink to="/ayuda" className="offcanvasNavLinks" replace >
                      <strong>ayuda</strong>
                    </NavLink>
                    <NavLink to="/nosotras" className="offcanvasNavLinks">
                      <strong>nosotras</strong>
                    </NavLink>
                    <NavLink to="/contacto" className="offcanvasNavLinks">
                      <strong>contacto</strong>
                    </NavLink>
                  </Stack>
                </Nav>
            </Container>
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
