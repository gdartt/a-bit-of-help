import React from "react";

import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

import { projectsData } from "../db/projects";
import "../styles/pages/projects.scss";

const projectsGrid = projectsData.projectsList.map((project) => (
    <ProjectCard project={project} key={project.photoAlt} />
));

const projectsList = projectsData.offerList.map((item) => (
    <li key={item.slice(0, 33)} className="projects__paragraph">
        {item}
    </li>
));

const Projects = () => (
    <Layout>
        <section className="container projects">
            <div className="projects__wrapper--list">
                <h2 className="projects__title">
                    A bit of help<span>projekty</span>
                </h2>
                <h3 className="projects__subtitle">
                    Analizujemy wasze potrzeby, projektujemy, publikujemy,
                    działamy!
                </h3>
                <ul className="projects__list">{projectsList}</ul>
            </div>
            <div className="projects__wrapper--projects-grid">
                {projectsGrid}
            </div>
        </section>
    </Layout>
);

export default Projects;
