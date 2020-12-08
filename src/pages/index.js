import "../styles/components/app.scss";

import React from "react";
// import { Router } from "@reach/router";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "./hero";
import AboutUs from "./about";
import Projects from "./projects";

const App = () => (
    <div className="app">
        <Nav />
        <main>
            <Hero path="/" />
            {/* <AboutUs path="about" />
            <Projects path="projects" /> */}
        </main>
        <Footer />
    </div>
);

export default App;
