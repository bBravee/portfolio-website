import { Button, Container, Row, Col } from "react-bootstrap";

import './Contact.css';

function Contact() {
    return (
        <div className="contact-wrapper">
            <h1>Lets get in <span>touch</span></h1>
            <Container>
                <Row className="justify-content-center">
                    <Col className="contact-form-col" lg={6} md={10} sm={9}>
                        <form className="contact-form" action="https://formsubmit.co/jakub.kusmierczyk@op.pl" method="POST">
                            <input className="form-control" type="hidden" name="_subject" value="Mail z portfolio"></input>
                            <input className="form-control" type="text" name="name" placeholder='name'  required></input>
                            <input className="form-control" type="email" name="email" placeholder='email'  required></input>
                            <textarea className="form-control" type="text" name="message" placeholder='Your message' required></textarea>
                            <Button className="contact-form-button" type='submit'>Send</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;