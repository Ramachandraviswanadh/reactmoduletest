import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import './Navbarcomponent.css'
const NavbarComponent = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav navi">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navtitle">
            Registration
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/signup">
              signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent