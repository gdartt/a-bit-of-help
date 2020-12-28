import React from "react";

import Layout from "../components/layout";

import { aboutUsData } from "../db/about";
import "../styles/pages/about.scss";

const AboutUs = () => {
    return (
        <Layout>
            <section className="container">
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
                <section className="background"></section>
            </section>
        </Layout>
    );
};

export default AboutUs;
