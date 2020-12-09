import React from "react";
import { Link } from "gatsby";

import "../styles/components/nav.scss";
import logo from "../assets/logoMain.svg";

const Nav = () => {
    const navNames = [
        { text: "o nas", link: "/about" },
        { text: "projekty", link: "/projects" },
        { text: "dołącz do nas", link: "/join" },
        { text: "kontakt", link: "/contact" },
    ];

    const navLinks = navNames.map((item) => (
        <Link to={item.link} className="nav__item" key={item.link}>
            <li className="nav__font" data-navitemcontent={item.text}>
                {item.text}
            </li>
        </Link>
    ));

    return (
        <header className="container nav">
            <Link to="/">
                <img src={logo} alt="Logo A Bit Of Help" />
            </Link>
            <nav className="nav__container">
                <ul className="nav__list">{navLinks}</ul>
            </nav>
        </header>
    );
};

export default Nav;
