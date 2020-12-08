import React from "react";
// import { Router } from "@reach/router";

import Layout from "../components/layout";
import Hero from "./hero";

import "../styles/components/app.scss";

const App = () => (
    <Layout>
        <main>
            <Hero path="/" />
        </main>
    </Layout>
);

export default App;
