import { Col, Row, Container, Badge } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

import './ProjectItem.css';

function ProjectItem({ imgUrl, title, badges, shortDescription, height }) {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const containerStyles = {
        backgroundImage: `url(${imgUrl})`,
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
                        <p>{shortDescription}</p>
                        <div className="badges-container">
                            {badges.map((item) => (
                                <Badge pill bg="dark">{item}</Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </animated.div>
    )
}

export default ProjectItem;