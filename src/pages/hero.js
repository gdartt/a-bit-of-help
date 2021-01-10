import React from "react";

import HeroBackground from "../components/HeroBackground";

import "../styles/pages/hero.scss";

const Hero = () => (
    <main className="container">
        <header className="header">
            <div className="page-title">
                <h1 className="header__title">
                    Ludzie i nowe technologie
                    <span>Wsparcie dla organizacji pozarządowych</span>
                </h1>
            </div>
            {HeroBackground}
        </header>
    </main>
);

export default Hero;
