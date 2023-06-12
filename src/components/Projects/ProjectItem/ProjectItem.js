import { Col, Row, Container } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

import { useParams } from 'react-router-dom';

import previewImg2 from '../../../assets/previewBig.jpg';

import './ProjectItem.css';

function ProjectItem({ imgUrl, title, description, height, projectsData }) {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const containerStyles = {
        backgroundImage: `url(${previewImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '16px',
        boxShadow: '0 4 30 rgba(0, 0, 0, 0.1)',
    };

    return (
        <animated.div style={animation}>
            <Container style={containerStyles} className="project-container">
                <div className="overlay"></div>
                <Row style={{ height: height }} className="project-item-row">
                    <Col lg={8} className="project-item-column">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </Col>
                </Row>
            </Container>
        </animated.div>
    )
}

export default ProjectItem;