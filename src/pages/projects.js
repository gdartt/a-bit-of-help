import React from "react";

import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

import "../styles/pages/projects.scss";
import { projectsData } from "../db/projects";

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

const projectsGrid = () =>
    projectsData.projectsList.map((project) => {
        const photos = {};
        photos.x1 = images.find((element) =>
            element.includes(project.photo.normal)
        );
        photos.x2 = images.find((element) =>
            element.includes(project.photo.retina)
        );

        return (
            <ProjectCard project={project} photos={photos} key={photos.x1} />
        );
    });

const Projects = () => (
    <Layout>
        <section className="container projects">
            <div className="projects__wrapper--list">
                <h2 className="projects__title">
                    A bit of help<span>projekty</span>
                </h2>
                <h3 className="projects__subtitle">
                    ANALIZUJEMY WASZE POTRZEBY, PROJEKTUJEMY, PUBLIKUJEMY,
                    DZIAŁAMY!
                </h3>
                <ul className="projects__list">
                    {projectsData.offerList.map((item) => (
                        <li
                            key={item.slice(0, 33)}
                            className="projects__paragraph"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="projects__wrapper--projects-grid">
                {projectsGrid()}
            </div>
        </section>
    </Layout>
);

export default Projects;
