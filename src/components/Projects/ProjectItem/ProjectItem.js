import { Col, Row, Image } from "react-bootstrap";

import './ProjectItem.css';

function ProjectItem({imgUrl, title, description}) {
    return (
        <>
            <Row className="project-item-row">
                <Col lg={4}>
                    <Image className="projects-image" src={imgUrl}/>
                </Col>
                <Col lg={8}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Col>
            </Row>
        </>
    )
}

export default ProjectItem;