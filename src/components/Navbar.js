import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png'
import Image from 'react-bootstrap/Image'

const NavigationBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Image src={logo} alt="logo" className="logo"/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto views">
              <Nav.Link href="#features">Viajes</Nav.Link>
              <Nav.Link href="#pricing">Ayuda</Nav.Link>
              <Nav.Link href="#pricing">Nosotras</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export { NavigationBar };
