import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
          <NavLink to="/">
            <Image src={logo} alt="logo" className="logo"/>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto views">
              <NavLink to="/viajes" className="navLinks">
                <strong className="viewsLinks">Viajes</strong>
              </NavLink>
              <NavLink to="/ayuda" className="navLinks">
                <strong className="viewsLinks">Ayuda</strong>
              </NavLink>
              <NavLink to="/nosotras" className="navLinks">
                <strong className="viewsLinks">Nosotras</strong>
              </NavLink>
              <NavLink to="/contacto" className="navLinks">
                <strong className="viewsLinks">Contacto</strong>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export { NavigationBar };
