import React from "react";

import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => (
    <div className="app">
        <Nav />
    // would be nice to wrap {children} in a base-section Style <section className = "" >...
        {children}
        <Footer />
    </div>
);

export default Layout;
