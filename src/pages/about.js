import React from "react";

import Layout from "../components/layout";

import "../styles/pages/about.scss";
import { aboutUsData } from "../db/about";

// https://reactjs.org/docs/lists-and-keys.html

const AboutUs = () => {
    return (
        <Layout>
        // move  <section className="container"> diectly to Layout and wrap children up. Is it a good idea to nest section in section?
            <section className="container">
                <section className="text">
                    <h2 className="about__font-title--top">
                        A bit of help<span>Fundacja</span>
                    </h2>
                    <h3 className="about__font-subtitle--top">
                        Innowacyjne rozwiązania dla organizacji non-profit
                    </h3>
        // again key!==index it is
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
// <section className="background" />
                <section className="background"></section>
            </section>
        </Layout>
    );
};

export default AboutUs;
