import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

import previewImg from '../../../assets/preview.jpg';
import previewImg2 from '../../../assets/previewBig.jpg';

import "./ProjectDetails.css";

function ProjectDetails({ projectsData }) {
    const { id } = useParams();

    const project = projectsData[0].find((item) => item.id === (parseInt(id)));

    console.log(project);

    return (
        <div className="project-details-wrapper">
            <div>
                <Image rounded src={previewImg2} className="project-details-image" alt="project-preview" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="project-details-title">{project.title}</h1>
                <div className="project-details-description">
                    <p>{project.description}</p>
                </div>
                <div className="d-flex justify-content-center flex-row pt-5">
                    <Button className="pd-button" size="lg">Github</Button>
                    <span className="mx-3"></span>
                    <Button className="pd-button" size="lg">Preview</Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;