import { Container, Row, Col } from "react-bootstrap";

import programmerImage from "../../assets/programmer.png";

import "./styles.css";

function Home() {
    return (
        <section className="h-100 w-100">
            <Container fluid className="h-100 d-flex justify-content-center align-items-center">
                <Row className="w-100">
                    <Col className="left-col w-50 d-flex flex-column justify-content-center align-items-center text-light">
                        <div className="about-wrapper">
                            <h1 className="pl-3 header ">
                                <span className="name-span">jakub</span>
                                <span className="funtion-span">.about()</span>
                            </h1>

                            <p>Jakub Kuśmierczyk</p>
                            <p>Computer Science Student</p>
                        </div>
                    </Col>
                    <Col className="w-50">
                        <img className="programmer-image" src={programmerImage}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;