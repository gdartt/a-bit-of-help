import React from "react";

import Layout from "../components/layout";

import "../styles/pages/projects.scss";
import { projectsData } from "../db/projects";

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
        </section>
    </Layout>
);

export default Projects;
