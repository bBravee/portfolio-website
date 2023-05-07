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
                    <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link to="/">
                                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                            </Link>
                            <Link to="/projects">
                                <Nav.Link className="nav-link" href="#features">Projects</Nav.Link>
                            </Link>
                            <Link>
                                <Nav.Link className="nav-link" href="#pricing">Contact</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;