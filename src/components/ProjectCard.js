import React from "react";

const ProjectCard = (props) => {
    const { photo, photoAlt, title, description } = props.project;

    return (
        <div className="projects__project-card">
            <div className="projects__project-img">
                <img
                    className="test"
                    srcSet={`${photo.retina} 2x`}
                    src={photo.normal}
                    alt={photoAlt}
                />
            </div>
            <h4 className="projects__subtitle--minor">{title}</h4>
            <p className="projects__paragraph--minor">{description}</p>
        </div>
    );
};

export default ProjectCard;
