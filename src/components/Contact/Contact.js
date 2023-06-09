import Form from 'react-bootstrap/Form';

import './Contact.css';

function Contact() {
    return (
        <div className="contact-wrapper">
            <h1>Lets get in <span>touch</span></h1>
            <Form className="contact-form">
                <Form.Group className="mb-3" controlId="First name">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="First name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Last name">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>Example textarea</Form.Label> */}
                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default Contact;