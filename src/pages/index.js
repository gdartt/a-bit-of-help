import "../components/App/App.scss";

import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
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
