import React from "react";
import "../styles/components/footer.scss";
import logoFooter from "../assets/logoFooter.svg";

//const arrayLinks = [...]

const Footer = () => {
    // here you render all data over and over again. Move it above FC 
    const linksArray = [
        "Zgłoś projekt",
        "Dołącz do naszego zespołu",
        "Poszukiwane wolontariaty",
        "Polityka prywatności / RODO",
    ];

    return (
        // why do you guys have 3 nested tags? <footer <div < div ??
        <footer>
            <div className="container">
                <div className="footer footer__font">
                    <a href="/">
                        <img src={logoFooter} alt={"logo-footer"} />
                    </a>
                    <ul>
          // don't use index as a key how about 'id' or name if it's unique?
                        {linksArray.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
