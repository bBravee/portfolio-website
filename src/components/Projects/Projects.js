import { Container } from "react-bootstrap";

import ProjectItem from "./ProjectItem/ProjectItem";

import "./Projects.css";

function Projects() {
    return (
        <Container fluid className="projects-wrapper">
            <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
            <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
            <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
        </Container>
    )
}

export default Projects;