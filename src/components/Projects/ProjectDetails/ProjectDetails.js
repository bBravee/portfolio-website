import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
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
        margin: '2rem 0',
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
            <animated.div style={animation}>
                <Image rounded src={project.imgUrl} className="project-details-image" alt="project-preview" />
            </animated.div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="project-details-description">
                    <h1 className="project-details-subtitle">About project</h1>
                    <p>{project.description}</p>
                </div>
                <div className="project-details-description">
                    <h1 className="project-details-subtitle" >Technologies</h1>
                    <BadgesContainer 
                        badges={project.badges} 
                        badgeStyles={badgeStyles}
                    />
                </div>
                <div className="d-flex justify-content-center flex-row pt-5">
                    <a href={project.repoUrl}>
                        <Button className="pd-button" size="lg"> <FontAwesomeIcon className="socials-icon" icon={faGithub} /> Github</Button>
                    </a>
                    {/* <span className="mx-3"></span> */}
                    {/* <Button className="pd-button" size="lg">Preview</Button> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;