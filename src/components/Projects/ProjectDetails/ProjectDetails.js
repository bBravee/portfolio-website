import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import previewImg from '../../../assets/preview.jpg';

import "./ProjectDetails.css";

function ProjectDetails({projectsData}) {
    const { id } = useParams();

    const project = projectsData[0].find((item) => item.id === (parseInt(id)));

    console.log(project);
    
    return (
            <div className="project-details-wrapper">
                <div>
                    <img src={previewImg} className="project-details-image" alt="project-preview" />
                </div>
                <div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <Button>Github</Button>
                    <Button>Preview</Button>
                </div>
            </div>
    );
}

export default ProjectDetails;