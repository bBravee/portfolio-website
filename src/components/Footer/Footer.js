import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

function Footer() {
    const brand = "<JK/>";

    return (
        <footer>
            <Container>
                <Row className="footer-row">
                    <Col className="footer-col footer-col-purple col-md-4">
                        <ul className="footer-list">
                            <li>
                                <FontAwesomeIcon className="socials-icon" icon={faEnvelope} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="socials-icon" icon={faGithub} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="socials-icon" icon={faFacebook} />
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-col footer-col-white col-md-4">{brand}</Col>
                    <Col className="footer-col footer-col-gray col-md-4">©2023{brand}</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;