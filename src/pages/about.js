import React from "react";

import Layout from "../components/layout";

import "../styles/pages/about.scss";
import { aboutUsData } from "../db/about";

const AboutUs = () => {
    return (
        <Layout>
            <section className="container">
                <section className="text">
                    <h2 className="about__font-title--top">
                        A bit of help<span>Fundacja</span>
                    </h2>
                    <h3 className="about__font-subtitle--top">
                        Innowacyjne rozwiązania dla organizacji non-profit
                    </h3>
                    <ul>
                        {aboutUsData.innovativeSolutions.map((el, index) => (
                            <li
                                key={index}
                                className="about__font-paragraph--top"
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
