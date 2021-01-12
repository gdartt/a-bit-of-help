import React from "react";

import Layout from "../components/layout";

import { aboutUsData } from "../db/about";

import background from "../assets/about/O-fundacji.png";
import backgroundx2 from "../assets/about/O-fundacji@2x.png";
import backgroundTeam from "../assets/about/TEAM_GRAFIKA.png"
import backgroundTeamx2 from "../assets/about/TEAM_GRAFIKA@2x.png";

import "../styles/pages/about.scss";

const AboutUs = () => {
    return (
        <Layout>
            <section className="container about about--puzzle">
                <section className="text">
                    <h2 className="about__title about__title--top">
                        A bit of help<span>Fundacja</span>
                    </h2>
                    <h3 className="about__subtitle about__subtitle--top">
                        Innowacyjne rozwiązania dla organizacji non-profit
                    </h3>
                    <ul className="about__list">
                        {aboutUsData.innovativeSolutions.map((el, index) => (
                            <li
                                key={index}
                                className="about__paragraph about__paragraph--top"
                            >
                                {el}
                            </li>
                        ))}
                    </ul>
                </section>
                <img
                className="about__background"
                srcSet={`${backgroundx2} 2x`}
                src={background}
                alt="About Us!"
                />
            </section>
            <div className="about__bottom--container">
                <section className="container about">
                    <section className="text">
                        <h2 className="about__title about__title--bottom">
                            A bit of help<span>Team</span>
                        </h2>
                        <h3 className="about__subtitle about__subtitle--bottom">
                            Pomagamy tym, którzy chcą pomagać
                        </h3>
                        <ul className="about__list">
                            {aboutUsData.whomWeHelp.map((el, index) => (
                                <li
                                    key={index}
                                    className="about__paragraph about__paragraph--bottom"
                                >
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <img
                    className="about__background"
                    srcSet={`${backgroundTeamx2} 2x`}
                    src={backgroundTeam}
                    alt="About Us!"
                    />
                </section>
            </div>
        </Layout>
    );
};

export default AboutUs;
