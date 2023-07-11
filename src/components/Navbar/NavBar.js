import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './Nav.css';

function NavBar() {
    const brand = "<JK/>"
    return (
        <>
            <Navbar className="navbar-wrapper fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Nav.Link className="nav-link" href="#home">./Home</Nav.Link>
                            </Link>
                            <Link to="/projects" style={{ textDecoration: 'none' }}>
                                <Nav.Link className="nav-link" href="#features">./Projects</Nav.Link>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Nav.Link className="nav-link" href="#pricing">./Contact</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;