import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useSpring, animated } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "./ProjectDetails.css";
import BadgesContainer from "./BadgesContainer";

function ProjectDetails({ projectsData }) {
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
    });

    const headerAnimation = useSpring({
        from: { transform: 'translateX(-800px)', opacity: 0, scale: 0 },
        to: { transform: 'translateX(0)', opacity: 1, scale: 1 },
        config: { duration: 500 },
    });

    const badgeStyles = {
        padding: '1rem 1.5rem',
        margin: '1rem 0',
        fontSize: '16px',
    }

    const { id } = useParams();

    let project = projectsData[0].find((item) => item.id === (parseInt(id)));

    if (!project) {
        project = projectsData[1].find((item) => item.id === (parseInt(id)));
    }

    console.log(project);

    return (
        <div className="project-details-wrapper">
            <animated.h1 style={headerAnimation}>
                <h1 className="project-details-title">{project.title}</h1>
            </animated.h1>
            <Container className="pd-grid-container">
                <Row className="pd-first-row">
                    <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <animated.div style={animation}>
                            <Image rounded src={project.imgUrl[0]} className="project-details-image" alt="project-preview" />
                        </animated.div>
                    </Col>
                    <Col sm={10} md={12} lg={5} xl={5} xxl={5} className="pd-text-col">
                        <h1 className="project-details-subtitle">About project</h1>
                        <p>{project.description}</p>
                    </Col>
                </Row>
                <Row className="pd-second-row">
                    <Col sm={12} md={12} lg={5} xl={5} xxl={5} className="pd-text-col">
                        <h1 className="project-details-subtitle" >Technologies</h1>
                        <BadgesContainer
                            badges={project.badges}
                            badgeStyles={badgeStyles}
                        />
                    </Col>
                    <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <animated.div style={animation}>
                            <Image rounded src={project.imgUrl[1]} className="project-details-image" alt="project-preview" />
                        </animated.div>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center flex-row pt-5">
                    <a href={project.repoUrl}>
                        <Button className="pd-button" size="lg"> <FontAwesomeIcon className="socials-icon" icon={faGithub} /> Github</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;