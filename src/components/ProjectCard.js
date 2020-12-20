import React from "react";

const ProjectCard = (props) => {
    const { project, photos } = props;

    return (
        <div className="projects__project">
            <img
                className="projects__project-img"
                srcSet={`${photos.x2} 2x`}
                src={photos.x1}
                alt={project.photoAlt}
            />
            <h4 className="projects__subtitle--minor">{project.title}</h4>
            <p className="projects__paragraph--minor">{project.description}</p>
        </div>
    );
};

export default ProjectCard;
