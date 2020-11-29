import React from 'react';
import './footer.scss';
import logoFooter from '../../assets/logoFooter.svg';

const Footer = () => {
    const linksArray = ['Zgłoś projekt', 'Dołącz do naszego zespołu', 'Poszukiwane wolontariaty', 'Polityka prywatności / RODO']
    return (
        <footer>
            <div className="container">
                <img src={logoFooter} alt={'logo-footer'}/>
                <ul>
                    {linksArray.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </footer>
    )
};

export default Footer;