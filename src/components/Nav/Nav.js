import React from "react";
import "./Nav.scss";
import logo from "../../assets/logoMain.svg";

const Nav = () => {
    const navNames = ["o nas", "projekty", "dołącz do nas", "kontakt"];

    return (
        <nav className="container nav">
            <a href="/">
                <img src={logo} alt="Logo A Bit Of Help" />
            </a>
            <ul className="nav__list">
                {navNames.map((name, index) => (
                    <li className="nav__item" key={index}>
                        <span className="nav__font" data-navItemContent={name}>
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
