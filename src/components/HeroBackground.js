import React from "react";

import circle from "../assets/hero/KOLO.svg";

import "../styles/components/heroBackground.scss";

const HeroBackground = (
    <div className="hero__background">
        <img
            src={circle}
            alt="sss"
            style={{ position: "absolute", left: "50px", top: "100px" }}
        />
    </div>
);

export default HeroBackground;
