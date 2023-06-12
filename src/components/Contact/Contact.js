import Form from 'react-bootstrap/Form';
import { Button, Container, Row, Col } from "react-bootstrap";

import { useState } from 'react'

import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setemailError] = useState('');
    const [messageError, setMessageError] = useState('');

    function validate() {
        let valid = true;

        if (name.trim() === '') {
            setNameError("Enter your name.");
            valid = false;
        } else {
            setNameError('');
        }

        if (email.trim() === '') {
            setemailError('Enter your email.');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setemailError('Enter a valid email.');
            valid = false;
        } else {
            setemailError('');
        }

        if (message.trim() === '') {
            setMessageError('Enter a message.');
            valid = false;
        } else {
            setMessageError('');
        }

        return valid;
    }

    function submitHandler(e) {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted succesfully.");
            // POST request
        } else {
            console.log("Form submit failed.");
        }
    }

    return (
        <div className="contact-wrapper">
            <h1>Lets get in <span>touch</span></h1>
            <Container>
                <Row className="justify-content-center">
                    <Col className="contact-form-col" lg={6} md={10} sm={9}>
                        <form className="contact-form" action="https://formsubmit.co/jakub.kusmierczyk@op.pl" method="POST">
                            <input className="form-control" type="hidden" name="_subject" value="Mail z portfolio"></input>
                            <input className="form-control" type="text" name="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required></input>
                            <input className="form-control" type="email" name="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <textarea className="form-control" type="text" name="message" placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            <Button className="contact-form-button" type='submit'>Send</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;