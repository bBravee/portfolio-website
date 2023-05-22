import { Container, Row, Col } from "react-bootstrap";

import ProjectItem from "./ProjectItem/ProjectItem";

import "./Projects.css";

import projectsData from "../../data/projectsData";

function Projects() {
    return (
        <Container fluid className="projects-wrapper">
            <Row className="projects-main-row">
                <Col sm={12} md={6} className="projects-left-col">
                    {projectsData[0].map((item) => (
                        <ProjectItem title={item.title} description={item.description} imgUrl={item.imgUrl} height={item.height} />
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