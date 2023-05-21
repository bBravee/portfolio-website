import { Col, Row, Container } from "react-bootstrap";

import './ProjectItem.css';



function ProjectItem({ imgUrl, title, description, height }) {
    const containerStyles = {
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '16',    
        boxShadow: '0 4 30 rgba(0, 0, 0, 0.1)'
    };
    
    return (
        <Container style={containerStyles}>
            <Row style={{ height: height }} className="project-item-row">
                <Col lg={4}>
                </Col>
                <Col lg={8}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectItem;