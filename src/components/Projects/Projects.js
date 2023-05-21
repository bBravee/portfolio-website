import { Container, Row, Col } from "react-bootstrap";

import ProjectItem from "./ProjectItem/ProjectItem";

import "./Projects.css";

const images = [
    "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
    "https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
    "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
];

function Projects() {
    return (
        <Container fluid className="projects-wrapper">
            <Row className="projects-main-row">
                <Col sm={12} md={6} className="left-column">

                    <ProjectItem title="workout app" description="loerm ipsum" imgUrl={images[0]} height={400} />

                    <ProjectItem title="workout app" description="loerm ipsum" imgUrl={images[1]} height={300} />

                </Col>
                <Col sm={12} md={6}>

                    <ProjectItem title="workout app" description="loerm ipsum" imgUrl={images[2]} height={300} />

                    <ProjectItem title="workout app" description="loerm ipsum" imgUrl={images[3]} height={380} />

                    <ProjectItem title="workout app" description="loerm ipsum" imgUrl={images[4]} height={360} />

                </Col>
            </Row>
        </Container>
    )
}

export default Projects;