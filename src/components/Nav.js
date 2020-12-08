import React from "react";
import { Link } from "gatsby";

import "../styles/components/nav.scss";
import logo from "../assets/logoMain.svg";

const Nav = () => {
    const navNames = [
        { text: "o nas", link: "about" },
        { text: "projekty", link: "projects" },
        { text: "dołącz do nas", link: "join" },
        { text: "kontakt", link: "contact" },
    ];

    const navLinks = navNames.map((item) => (
        <Link to={item.link} className="nav__item" key={item.link}>
            <span className="nav__font" data-navItemContent={item.text}>
                {item.text}
            </span>
        </Link>
    ));

    return (
        <header className="container nav">
            <Link to="./">
                <img src={logo} alt="Logo A Bit Of Help" />
            </Link>
            <div className="nav__list">{navLinks}</div>
        </header>
    );
};

export default Nav;
