import React from "react";

import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => (
    <div className="app">
        <Nav />
        {children}
        <Footer />
    </div>
);

export default Layout;
