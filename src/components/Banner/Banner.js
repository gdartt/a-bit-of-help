import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="page-title">
                    <h1 className="header__font-title--top">Ludzie i nowe technologie</h1>
                    <h1 className="header__font-title--bottom">Wsparcie dla organizacji pozarządowych</h1>
                </div>
                <div className="background-image"></div>
            </header>
        </div>
    )
};

export default Banner;