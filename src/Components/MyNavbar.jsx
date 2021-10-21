import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const MyNavbar = () => (
        <Navbar bg="light" expand="lg">
        <Link to="/" className="btn">Home</Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Remote Jobs</Nav.Link>
            <Link to="/favourites" className="btn">Favourites</Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

export default MyNavbar;