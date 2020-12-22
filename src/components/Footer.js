import React from "react";

import { linksArray } from "../db/footer";

import "../styles/components/footer.scss";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer">
                <a href="/">
                    <img src={logoFooter} alt={"logo-footer"} />
                </a>
                <ul>
                    {linksArray.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
