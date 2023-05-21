import { Container, Row, Col } from "react-bootstrap";

import ProjectItem from "./ProjectItem/ProjectItem";

import "./Projects.css";

function Projects() {
    return (
        <Container fluid className="projects-wrapper">
            <Row>
                <Col>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <ProjectItem title="workout app" description="loerm ipsum" imgUrl="https://www.svgrepo.com/show/149441/jupiter.svg" />
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;