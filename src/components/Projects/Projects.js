import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import ProjectItem from "./ProjectItem/ProjectItem"

import "./Projects.css";

function Projects({ projectsData }) {
    return (
        <Container fluid className="projects-wrapper">
            <Row className="projects-main-row">
                <Col sm={12} md={6} className="projects-left-col">
                    {projectsData[0].map((item) => (
                        <Link to={`/projects/${item.id}`}>
                            <ProjectItem 
                                title={item.title} 
                                description={item.description} 
                                imgUrl={item.imgUrl} 
                                height={item.height}
                                projectsData={projectsData}
                             />
                        </Link>
                    ))}
                </Col>
                <Col sm={12} md={6}>
                    {projectsData[1].map((item) => (
                        <ProjectItem title={item.title} description={item.description} imgUrl={item.imgUrl} height={item.height} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;