import React from "react";

import Layout from "../components/layout";
import Form from "../components/Form";

import { contactData } from "../db/contact";

const Contact = () => (
    <Layout>
        <section className="container">
            {/* already prepared Form component ready to use */}
            <Form data={contactData.formData} />
        </section>
    </Layout>
);

export default Contact;
