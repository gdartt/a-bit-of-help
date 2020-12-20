import React from "react";

const Project = (props) => {
    const { project } = props;

    return (
        <div className="projects__project">
            <img
                className="projects__project-img"
                src={project.photo}
                alt={project.photoAlt}
            />
            <h4 className="projects__subtitle--minor">{project.title}</h4>
            <p className="projects__paragraph projects__paragraph--minor">
                {project.description}
            </p>
        </div>
    );
};

export default Project;
