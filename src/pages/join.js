import React from "react";

import Layout from "../components/layout";
import Form from "../components/Form";

import { joinData } from "../db/join";

const Join = () => (
    <Layout>
        <section className="container">
            {/* already prepared Form component ready to use */}
            <Form data={joinData.formData} />
        </section>
    </Layout>
);

export default Join;
