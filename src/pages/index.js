import React from "react";

import Layout from "../components/layout";
import Hero from "./hero";

import "../styles/components/app.scss";

const App = () => (
    <Layout>
        <Hero path="/" />
    </Layout>
);

export default App;
