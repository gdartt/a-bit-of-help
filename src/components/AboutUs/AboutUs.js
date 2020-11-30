import React from 'react';
import './aboutUs.scss';
import { aboutUsData } from '../../db/db';

const AboutUs = () => {
    return (
        <div>
            <section className="text">
                <h2 className="about__font-title--top">A bit of help</h2>
                <h2 className="about__font-title--bottom">Fundacja</h2>
                <h3 className="about__font-subtitle--top">Innowacyjne rozwiązania dla organizacji non-profit</h3>
                <ul>
                    {
                        aboutUsData.innovativeSolutions.map((el, index) => (
                            <li key={index} className="about__font-paragraph--top">{el}</li>
                        ))
                    }
                </ul>
            </section>
            <section className="background"></section>
        </div>
    )
};

export default AboutUs;