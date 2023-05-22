import { Col, Row, Container } from "react-bootstrap";

import './ProjectItem.css';

function ProjectItem({ imgUrl, title, description, height }) {

    const containerStyles = {
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '16px',
        boxShadow: '0 4 30 rgba(0, 0, 0, 0.1)',
    };


    return (
        <Container style={containerStyles} className="project-container">
            <div className="overlay"></div>
            <Row style={{ height: height }} className="project-item-row">
                <Col lg={8} className="project-item-column">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectItem;