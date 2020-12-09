import React from "react";

import "../styles/pages/hero.scss";

//according to google devs, you can use as many h1 tags as you want per page but it's not recommended by SEO experts.
const Hero = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="page-title">
                    <h1 className="header__font-title--top">
                        Ludzie i nowe technologie
                    </h1>
                    <h1 className="header__font-title--bottom">
                        Wsparcie dla organizacji pozarządowych
                    </h1>
                </div>
        // you can also move it to Layout section <div className={imageClassName} />
                <div className="background-image"></div>
            </header>
        </div>
    );
};

export default Hero;
