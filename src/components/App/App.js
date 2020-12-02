import "./App.scss";

import React from "react";

import Nav from "../Nav";
import Footer from "../Footer";
import Banner from "../Banner";
// import AboutUs from "../AboutUs";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
