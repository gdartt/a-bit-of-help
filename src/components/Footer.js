import React from "react";

import { linksArray } from "../db/footer";

import "../styles/components/footer.scss";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => (
    <footer>
        <div className="container footer">
            <a href="/">
                <img src={logoFooter} alt={"logo-footer"} />
            </a>
            <ul>
                {linksArray.map((element) => (
                    <li key={element.slice(0, 33)}>{element}</li>
                ))}
            </ul>
        </div>
    </footer>
);

export default Footer;
