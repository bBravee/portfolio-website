import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem/ProjectItem";

import "./Projects.css";

function Projects({ projectsData }) {
  return (
    <Container fluid className="projects-wrapper">
      <h1 className="projects-title">See my work</h1>
      <Row className="projects-main-row">
        {projectsData.map((item) => (
          <Col sm={12} md={6}>
            <Link
              to={`/projects/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProjectItem
                title={item.title}
                shortDescription={item.shortDescription}
                badges={item.badges}
                imgUrl={item.imgUrl[0]}
                height={item.height}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
