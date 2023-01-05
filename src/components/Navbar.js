import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png'
import Image from 'react-bootstrap/Image'

const NavigationBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Container>
          <Image src={logo} alt="logo" className="logo"/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto views">
              <Nav.Link href="#features" className="viewsLinks">Viajes</Nav.Link>
              <Nav.Link href="#pricing" className="viewsLinks">Ayuda</Nav.Link>
              <Nav.Link href="#pricing" className="viewsLinks">Nosotras</Nav.Link>
              <Nav.Link href="#pricing" className="viewsLinks">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export { NavigationBar };
